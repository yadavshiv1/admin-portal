import React, { useState } from "react";
import Tracks from "../contentTabs/Tracks";
import Playlist from "../contentTabs/Playlist";
import Albums from "../contentTabs/Albums";
import PendingReviwes from "../contentTabs/PendingReviwes";
import { Add } from "@mui/icons-material";
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CloudUpload, Link as LinkIcon } from "@mui/icons-material"
import AddNewTrack from "../contentTabs/AddNewTrack";

const tabs = ["Tracks", "Playlist", "Albums", "PendingReviwes"];

const tabComponents = {
  "Tracks": Tracks,
  "Playlist": Playlist,
  "Albums": Albums,
  "PendingReviwes": PendingReviwes,
};

export default function Content() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveComponent = tabComponents[activeTab];
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6 font-jakarta">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Content</h1>
            <h3 className="text-xl font-semibold text-gray-600">Manage user & permissions</h3>
          </div>

          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-[#259CE5] text-white hover:bg-[#259CE5] transition"
            >
              <img 
                src="/img/AddIcon.svg" 
                alt="Add user" 
                className="w-6 h-6 mr-2"
              />
              Add New Track
            </button>
          </div>
        </div>

      <div className="p-6 bg-white rounded-xl shadow space-y-4">
      <div className="flex justify-between items-center border-b border-gray-300 overflow-x-auto">
      <div className="flex space-x-4">
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
      </div>
      </div>

      <div className="p-4 bg-white shadow rounded-xl">
        <ActiveComponent />
      </div>
      {showModal && (
          <AddNewTrack setShowModal={setShowModal} />
        )}
    </div>
  );
}
