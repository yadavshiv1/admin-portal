import React, { useState } from "react";
import { Avatar } from "@mui/material";
import DashboardIcon from "../../src/assets/dashboardIcon.svg";
import ActiveDashboardIcon from "../../src/assets/activedashboardIcon.svg";
import UserManagementIcon from "../../src/assets/userManagementIcon.svg";
import ActiveUserManagementIcon from "../../src/assets/activeuserManagementIcon.svg";
import ContentManagementIcon from "../../src/assets/contentManagementIcon.svg";
import ActiveContentManagementIcon from "../../src/assets/activecontentManagementIcon.svg";
import ManageCouponIcon from "../../src/assets/manageCouponIcon.svg";
import ActiveManageCouponIcon from "../../src/assets/activemanageCouponIcon.svg";
import SettingsIcon from "../../src/assets/settingsIcon.svg";
import SupportIcon from "../../src/assets/supportIcon.svg";
import AvatarImg from "../../src/assets/Avatar.svg";

const mainTabs = [
  { label: "Dashboard", icon: DashboardIcon, activeIcon: ActiveDashboardIcon },
  { label: "Users Management", icon: UserManagementIcon, activeIcon: ActiveUserManagementIcon },
  { label: "Content Management", icon: ContentManagementIcon, activeIcon: ActiveContentManagementIcon },
  { label: "Manage Coupon", icon: ManageCouponIcon, activeIcon: ActiveManageCouponIcon },
];

const extraTabs = [
  { label: "Settings", icon: SettingsIcon, activeIcon: ActiveUserManagementIcon },
  { label: "Support", icon: SupportIcon, activeIcon: ActiveUserManagementIcon },
];


export default function Sidebar({ activeTab, setActiveTab}) {
  // const role = localStorage.getItem("role");
    const [role, setRole] = useState("admin");
  const allowedTabsForArtist = ["Content Management", "Dashboard"];

  return (
    <aside className="h-screen bg-white shadow-lg flex flex-col justify-between font-jakarta">
      <div>
      <div className="p-4 text-xl font-bold text-[#081021] flex items-center gap-2 font-jakarta"><img src="/assets/Logo.svg" alt="Logo" className="h-10 w-10" />Yogananda Music</div>        
      <nav className="p-4 space-y-2 overflow-y-auto">
      {mainTabs.filter((tab) => {
              if (role === "artist") {
                return allowedTabsForArtist.includes(tab.label);
              }
              return true;
            }).map((tab) => (
              <button
              key={tab.label}
              className={`w-full flex items-center gap-2 text-left px-4 py-2 rounded hover:bg-indigo-50 ${
                activeTab === tab.label
                  ? "text-[#4F46E5] bg-[#E7ECFC] rounded-2xl font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              <img
                src={activeTab === tab.label ? tab.activeIcon : tab.icon}
                alt={tab.label}
                className="w-5 h-5"
              />
              {tab.label}
            </button>
            
          ))}

          <hr className="my-4" />

          {extraTabs.filter((tab) => {
              if (role === "artist") {
                return tab.label === "Support";
              }
              return true;
            })
            .map((tab) => (
              <button
                key={tab.label}
                className={`w-full flex items-center gap-2 text-left px-4 py-2 rounded hover:bg-indigo-50 ${
                  activeTab === tab.label ? "bg-indigo-100 font-semibold" : ""
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
                {tab.label}
              </button>
            ))}

        </nav>
      </div>

      <div className="border-t px-8 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
       </div>
    </aside>
  );
}
