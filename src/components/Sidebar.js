import React from "react";
import { Avatar } from "@mui/material";

const mainTabs = ["Dashboard", "Content", "Analytics", "Users", "Settings", "Support"];
const extraTabs = ["Feedback", "Help"];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="p-6 text-2xl font-bold text-indigo-600 border-b">Yogananda Music</div>
        <nav className="p-4 space-y-2 overflow-y-auto">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2 rounded hover:bg-indigo-50 ${
                activeTab === tab ? "bg-indigo-100 font-semibold" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <hr className="my-4" />
          {extraTabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2 rounded hover:bg-indigo-50 ${
                activeTab === tab ? "bg-indigo-100 font-semibold" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section with Avatar & Logout */}
      <div className="border-t px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar src="https://i.pravatar.cc/40" alt="User" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
       </div>
    </aside>
  );
}
