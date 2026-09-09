"use client";

import CompanyProfileTab from "./components/CompanyProfileTab";
import SettingsRightSidebar from "./components/SettingsRightSidebar"; // ഇതിൻ്റെ പാത്ത് നിങ്ങളുടെ ഫോൾഡർ സ്ട്രക്ചർ അനുസരിച്ച് മാറ്റാം

export const CompanyProfileMain = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      
      {/* LEFT SIDE: Forms & Preferences (CompanyProfileTab Component) */}
      <div className="flex-1 w-full min-w-0">
        <CompanyProfileTab />
      </div>

      {/* RIGHT SIDE: Settings Right Sidebar */}
      <div className="w-full xl:w-[300px] shrink-0 flex flex-col gap-6 sticky top-6">
        <SettingsRightSidebar />
      </div>

    </div>
  );
};