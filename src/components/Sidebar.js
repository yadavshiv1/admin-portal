import React from "react";

const mainTabs = ["Dashboard", "Content", "Analytics", "Users", "Settings", "Support"];
const extraTabs = ["Feedback", "Help", "Logout"];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 text-2xl font-bold text-indigo-600 border-b">MyApp</div>
      <nav className="flex-1 p-4 space-y-2">
        {mainTabs.map(tab => (
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
        {extraTabs.map(tab => (
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
    </aside>
  );
}
