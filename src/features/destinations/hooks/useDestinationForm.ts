import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { createDestination, getDestination, updateDestination, getDestinations } from '../services/destinationServices'; // 🔥 getDestinations കൂടി ഇമ്പോർട്ട് ചെയ്യണം
import { extractErrorMessages } from '@/utils/extractError'; 
import { toast } from 'sonner';

export const useDestinationForm = (destinationIdOrSlug?: string) => { 
  const [loading, setLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(!!destinationIdOrSlug); 
  const [error, setError] = useState<string | null>(null);
  const [isSlugEdited, setIsSlugEdited] = useState(false);
  const [actualId, setActualId] = useState<string | null>(null); // 🔥 റിയൽ ID സൂക്ഷിക്കാൻ

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    country: 'India', 
    region: 'Asia',   
    destination_type: 'country',
    short_description: '',
    detailed_description: '',
    tags: '',
    best_time_start: '',
    best_time_end: '',
    latitude: '',
    longitude: '',
    display_order: 0,
    meta_title: '',
    meta_description: '',
    is_active: true,
  });

  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredPreview, setFeaturedPreview] = useState<string | null>(null);
  
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  // 🔥 ഡാറ്റ ഫെച്ച് ചെയ്ത് ഫോമിൽ നിറയ്ക്കുന്നു (Slug to ID ലോജിക് ചേർത്തു)
  useEffect(() => {
    if (destinationIdOrSlug) {
      const fetchInitialData = async () => {
        try {
          // ആദ്യം ഇത് നമ്പറാണോ (ID) അതോ സ്ട്രിങ് ആണോ (Slug) എന്ന് നോക്കുന്നു
          const isNumericId = /^\d+$/.test(destinationIdOrSlug);
          let fetchId = destinationIdOrSlug;

          // സ്ലഗ് ആണെങ്കിൽ, ലിസ്റ്റ് API വിളിച്ച് അതിൽ നിന്ന് ID കണ്ടുപിടിക്കുന്നു
          if (!isNumericId) {
            const listResponse = await getDestinations({ search: destinationIdOrSlug });
            const matchedDestination = listResponse.results?.find((d: any) => d.slug === destinationIdOrSlug);
            
            if (matchedDestination) {
              fetchId = matchedDestination.id.toString();
            } else {
              throw new Error("Destination not found!");
            }
          }

          setActualId(fetchId); // Save for later update
          const data = await getDestination(fetchId); // 🔥 ഇപ്പോൾ ശരിയായ ID പോകും
          
          setFormData({
            name: data.name || '',
            slug: data.slug || '',
            country: data.country || '',
            region: data.region || '',
            destination_type: data.destination_type || 'other',
            short_description: data.short_description || '',
            detailed_description: data.detailed_description || '',
            tags: data.tags || '',
            best_time_start: data.best_time_start || '',
            best_time_end: data.best_time_end || '',
            latitude: data.latitude || '',
            longitude: data.longitude || '',
            display_order: data.display_order || 0,
            meta_title: data.meta_title || '',
            meta_description: data.meta_description || '',
            is_active: data.is_active ?? true,
          });
          
          if (data.featured_image_url || data.featured_image) {
            setFeaturedPreview(data.featured_image_url || data.featured_image);
          }
          
          if (data.gallery_images && Array.isArray(data.gallery_images)) {
             setGalleryPreviews(data.gallery_images.map((img: any) => img.url || img));
          }

          setIsSlugEdited(true); 
        } catch (err: any) {
          toast.error(extractErrorMessages(err) || "Failed to load destination data.");
        } finally {
          setIsFetchingData(false);
        }
      };
      fetchInitialData();
    }
  }, [destinationIdOrSlug]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // ... പഴയ കോഡ് ...
    const { name, value, type } = e.target;
    
    if (name === 'slug') {
      setIsSlugEdited(true);
      const formattedSlug = value.toLowerCase().replace(/\s+/g, '-');
      setFormData(prev => ({ ...prev, slug: formattedSlug }));
      return;
    }

    if (name === 'name') {
      if (!isSlugEdited) {
        const autoSlug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        setFormData(prev => ({ ...prev, name: value, slug: autoSlug }));
      } else {
        setFormData(prev => ({ ...prev, name: value }));
      }
      return;
    }

    if (type === 'radio') {
      const radioInput = e.target as HTMLInputElement;
      if (name === 'is_active') {
        setFormData(prev => ({ ...prev, is_active: radioInput.value === 'true' }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const setFieldValue = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateFile = (file: File) => {
    if (file.size > 2 * 1024 * 1024) {
      toast.error(`"${file.name}" exceeds the 2MB size limit.`);
      return false;
    }
    return true;
  };

  const handleFeaturedImageDrop = (file: File) => {
    if (validateFile(file)) {
      setFeaturedImage(file);
      setFeaturedPreview(URL.createObjectURL(file));
    }
  };

  const handleFeaturedImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFeaturedImageDrop(file);
  };

  const removeFeaturedImage = () => {
    setFeaturedImage(null);
    setFeaturedPreview(null);
  };

  const handleGalleryImagesDrop = (files: File[]) => {
    const validFiles = files.filter(validateFile);
    if (galleryImages.length + validFiles.length > 10) {
      toast.error("You can only upload a maximum of 10 gallery images.");
      validFiles.splice(10 - galleryImages.length);
    }
    const newFiles = [...galleryImages, ...validFiles];
    setGalleryImages(newFiles);
    setGalleryPreviews(newFiles.map(f => URL.createObjectURL(f)));
  };

  const handleGalleryImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleGalleryImagesDrop(files);
  };

  const removeGalleryImage = (index: number) => {
    const newFiles = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(newFiles);
    setGalleryPreviews(newFiles.map(f => URL.createObjectURL(f)));
  };

  const moveGalleryToFeatured = (index: number) => {
    const fileToMove = galleryImages[index];
    if (fileToMove) {
      setFeaturedImage(fileToMove);
      setFeaturedPreview(URL.createObjectURL(fileToMove));
      removeGalleryImage(index);
      toast.success("Image moved to Featured!");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.detailed_description || formData.detailed_description === '<br>') {
      toast.error("Detailed Description is required.");
      return;
    }
    
    if (!featuredImage && !featuredPreview) {
      toast.error("Featured Image is required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value.toString());
      });

      if (featuredImage) data.append('featured_image', featuredImage);
      galleryImages.forEach(file => data.append('gallery_images', file));

      // 🔥 actualId ഉപയോഗിച്ച് അപ്ഡേറ്റ് ചെയ്യുന്നു
      if (actualId) {
        await updateDestination(actualId, data);
        toast.success('Destination updated successfully!');
      } else {
        await createDestination(data);
        toast.success('Destination created successfully!');
      }
      
      setTimeout(() => {
        window.location.href = '/destinations';
      }, 1500);

    } catch (err: any) {
      const errorMessage = extractErrorMessages(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData, handleChange, setFieldValue,
    featuredPreview, handleFeaturedImage, handleFeaturedImageDrop, removeFeaturedImage,
    galleryPreviews, handleGalleryImages, handleGalleryImagesDrop, removeGalleryImage,
    moveGalleryToFeatured,
    handleSubmit, loading, error,
    isFetchingData 
  };
};