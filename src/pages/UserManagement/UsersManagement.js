import React, { useState } from "react";
import NewArtist from "./Tabs/NewArtist";
import AllUser from "./Tabs/AllUser";
import Artists from "./Tabs/Artists";
import Listeners from "./Tabs/Listeners";

const tabs = ["New Artist", "All Users", "Artists", "Listeners"];

const tabComponents = {
  "New Artist": NewArtist,
  "All Users": AllUser,
  "Artists": Artists,
  "Listeners": Listeners,
};

export default function UsersManagement() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="space-y-6 font-jakarta">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <h3 className="text-xl text-gray-600">Manage user & permissions</h3>
        </div>
        <button
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-[#259CE5] text-white hover:bg-[#259CE5] transition"
                >
                  <img
                    src="/img/AddIcon.svg"
                    alt="Add"
                    className="w-6 h-6"
                  />
                  Add User
                </button>
      </div>

      <div className="flex items-center justify-between mt-4 pb-2">
        <div className="flex space-x-4 bg-white border border-grey-100 gap-x-6 rounded-md py-1 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm font-medium transition duration-200 ${
                activeTab === tab
                  ? "bg-[#F2F9FF] text-[#000000]"
                  : "text-[#787C82]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {!(activeTab === "New Artist" || activeTab === "All Users") && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img 
                src="/img/searchIcon.svg"
                alt="Search"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
      </div>

      <div className="p-4 bg-white shadow rounded-xl">
        <ActiveComponent />
      </div>
    </div>
  );
}
