import { FileEdit, MessageCircle, Phone, Mail, ChevronRight, Clock } from "lucide-react";

export default function HelpSidebar() {
  const popularArticles = [
    "How to add a new booking",
    "How to create a quotation",
    "Managing user roles and permissions",
    "How to import customers",
    "Troubleshoot email notifications",
  ];

  return (
    <>
      {/* 1. Contact Support */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-[14px] font-bold text-gray-800 mb-1">Contact Support</h3>
        <p className="text-[10px] text-gray-500 font-medium mb-6 leading-relaxed">
          Can't find what you're looking for? Our support team is ready to assist you.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileEdit size={14} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Create Support Ticket</p>
              <p className="text-[9px] text-gray-500 font-medium">Get help by submitting a ticket</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <MessageCircle size={14} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">WhatsApp Support</p>
              <p className="text-[9px] text-gray-500 font-medium">Chat with us on WhatsApp</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Phone size={14} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 group-hover:text-purple-600 transition-colors">Call Us</p>
              <p className="text-[10px] font-bold text-gray-600">+91 98460 12345</p>
              <p className="text-[9px] text-gray-400 font-medium">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Mail size={14} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">Email Us</p>
              <p className="text-[10px] font-bold text-gray-600">support@travelhope.com</p>
              <p className="text-[9px] text-gray-400 font-medium">We usually reply within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Popular Articles */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-bold text-gray-800">Popular Articles</h3>
          <button className="text-[10px] font-bold text-blue-600 hover:underline shrink-0">View all articles</button>
        </div>
        <ul className="space-y-3">
          {popularArticles.map((article, idx) => (
            <li key={idx} className="flex items-start gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600 shrink-0 mt-0.5" />
              <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                {article}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. CTA Box */}
      <div className="bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm p-6 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h3 className="text-[13px] font-bold text-gray-800 mb-1.5">Can't find your answer?</h3>
        <p className="text-[10px] text-gray-600 font-medium mb-5 leading-relaxed">
          If you can't find the solution you're looking for, feel free to reach out to our support team directly.
        </p>
        <button className="w-full lg:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors flex items-center justify-center gap-1.5 mb-3">
          <FileEdit size={14} /> Create Support Ticket
        </button>
        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[9px] font-bold text-gray-500 w-full">
          <Clock size={12} className="text-gray-400" />
          Average response time: 24 hrs
        </div>
      </div>
    </>
  );
}