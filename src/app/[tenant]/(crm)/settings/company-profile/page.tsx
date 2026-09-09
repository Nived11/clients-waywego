// CompanyProfileTab-ന് പകരം CompanyProfileMain ആണ് ഇവിടെ ഇമ്പോർട്ട് ചെയ്യേണ്ടത്
import { CompanyProfileMain } from "@/features/settings/company-profile/CompanyProfileMain";

export const metadata = {
  title: 'Company Profile | Settings',
};

export default function CompanyProfilePage() {
  // ഈ മെയിൻ കോമ്പോണന്റിന്റെ ഉള്ളിലാണ് Tab ഉം Right Sidebar ഉം ഉള്ളത്.
  return <CompanyProfileMain />;
}