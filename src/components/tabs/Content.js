import React, { useState } from "react";
import AllUsers from "../UserTabs/AllUsers"
import User from "../UserTabs/User"
import Xyz from "../UserTabs/Xyz"
import Abc from "../UserTabs/Abc"

const tabs = ["All Users", "User", "XYZ", "ABC"];

const tabComponents = {
  "All Users": AllUsers,
  "User": User,
  "XYZ": Xyz,
  "ABC": Abc,
};

export default function Content() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Content</h1>

      {/* Sub Title */}
      <h3 className="text-xl font-semibold text-gray-600">Manage User Data</h3>

      {/* Tabs Navbar */}
      <div className="flex space-x-4 border-b border-gray-300 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition duration-200 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white shadow rounded-xl">
        <ActiveComponent />
      </div>
    </div>
  );
}
