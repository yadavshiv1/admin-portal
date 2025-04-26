import React from "react";
import { Avatar } from "@mui/material";

const mainTabs = [
  { label: "Dashboard", icon: "/img/dashboardIcon.svg",activeIcon:"/img/activedashboardIcon.svg"},
  { label: "Users Management", icon: "/img/userManagementIcon.svg",activeIcon:"/img/activeuserManagementIcon.svg" },
  { label: "Content Management", icon: "/img/contentManagementIcon.svg",activeIcon:"/img/activecontentManagementIcon.svg" },
  { label: "Manage Coupon", icon: "/img/manageCouponIcon.svg",activeIcon:"/img/activemanageCouponIcon.svg" },
  // { label: "Analytics", icon: "/img/AnalyticsIcon.svg",activeIcon:"/img/activeuserManagementIcon.svg" },
];

const extraTabs = [
  // { label: "Notification", icon: "/img/notificationIcon.svg" ,activeIcon:"/img/activeuserManagementIcon.svg"},
  { label: "Settings", icon: "/img/settingsIcon.svg",activeIcon:"/img/activeuserManagementIcon.svg" },
  { label: "Support", icon: "/img/supportIcon.svg",activeIcon:"/img/activeuserManagementIcon.svg"},
];


export default function Sidebar({ activeTab, setActiveTab}) {
  const role = localStorage.getItem("role");
  const allowedTabsForArtist = ["Content Management", "Dashboard"];

  return (
    <aside className="h-screen bg-white shadow-lg flex flex-col justify-between font-jakarta">
      <div>
      <div className="p-4 text-xl font-bold text-[#081021] flex items-center gap-2 font-jakarta"><img src="/img/logo.svg" alt="Logo" className="h-10 w-10" />Yogananda Music</div>        
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
