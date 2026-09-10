import { ChevronDown } from "lucide-react";

export default function HelpFAQ() {
  const faqs = [
    "How do I reset my password?",
    "Can I customize invoice templates?",
    "How do I assign leads to team members?",
    "How do I export data to Excel?",
    "What are the user roles and permissions?",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[14px] font-bold text-gray-800">Frequently Asked Questions</h3>
        <button className="text-[10px] font-bold text-blue-600 hover:underline shrink-0">View all FAQs</button>
      </div>

      <div className="flex flex-col divide-y divide-gray-100">
        {faqs.map((faq, idx) => (
          <div key={idx} className="flex items-center justify-between py-3.5 group cursor-pointer">
            <h4 className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors pr-4">{faq}</h4>
            <ChevronDown size={14} className="text-gray-400 group-hover:text-blue-600 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}