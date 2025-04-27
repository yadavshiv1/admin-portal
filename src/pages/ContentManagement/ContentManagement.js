import React, { useState } from "react";
import Tracks from "./Tabs/Tracks";
import Playlist from "./Tabs/Playlist";
import Albums from "./Tabs/Albums";
import PendingReviwes from "./Tabs/PendingReviwes";
import AddNewTrack from "./Tabs/AddNewTrack";

const tabs = ["Tracks", "Playlist", "Albums", "PendingReviwes"];

const tabComponents = {
  Tracks: Tracks,
  Playlist: Playlist,
  Albums: Albums,
  PendingReviwes: PendingReviwes,
};

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveComponent = tabComponents[activeTab];
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="space-y-6 font-jakarta">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Content</h1>
        <h3 className="text-xl font-semibold text-gray-600">
          Manage user & permissions
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center overflow-x-auto">
          <div className="flex space-x-6 bg-white border border-gray-300 px-8 py-1 rounded-md ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === tab
                    ? "bg-[#F2F9FF] text-[#000000]"
                    : "text-[#787C82]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
              {activeTab === "PendingReviwes" ? (
                <div className="relative w-80">
                  <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <img 
                    src="/img/searchIcon.svg"
                    alt="Search"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-[#259CE5] text-white hover:bg-[#259CE5] transition"
                >
                  <img
                    src="/img/AddIcon.svg"
                    alt="Add"
                    className="w-6 h-6"
                  />
                  Add Track
                </button>
              )}
            </div>

        </div>
      </div>

      <div className="p-4 bg-white shadow rounded-xl">
        <ActiveComponent />
      </div>

      {showModal && <AddNewTrack setShowModal={setShowModal} />}
    </div>
  );
}
