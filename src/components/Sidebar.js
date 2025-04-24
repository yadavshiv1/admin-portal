import React from "react";
import { Avatar } from "@mui/material";

const mainTabs = [
  { label: "Dashboard", icon: "/img/dashboardIcon.svg" },
  { label: "Content", icon: "/img/contentManagementIcon.svg" },
  { label: "Analytics", icon: "/img/AnalyticsIcon.svg" },
  { label: "Users", icon: "/img/userManagementIcon.svg" },
  { label: "Settings", icon: "/img/settingsIcon.svg" },
  { label: "Support", icon: "/img/supportIcon.svg" },
];

const extraTabs = [
  { label: "Feedback", icon: "/icons/notificationIcon.svg" },
  { label: "Help", icon: "/icons/help.svg" },
];


export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-80 h-screen bg-white shadow-lg flex flex-col justify-between font-jakarta">
      <div>
      <div className="p-6 text-xl font-bold text-[#081021] flex items-center gap-2 font-jakarta"><img src="/img/logo.svg" alt="Logo" className="h-7 w-7" />Yogananda Music</div>        
      <nav className="p-4 space-y-2 overflow-y-auto">
      {mainTabs.map((tab) => (
          <button
            key={tab.label}
            className={`w-full flex items-center gap-2 text-left px-4 py-2 rounded hover:bg-indigo-50 ${
              activeTab === tab.label ? "text-[#4F46E5] font-semibold" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
            {tab.label}
          </button>
          ))}

          <hr className="my-4" />

          {extraTabs.map((tab) => (
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

      <div className="border-t px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar src="img/Avatar.svg" alt="User" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
       </div>
    </aside>
  );
}
