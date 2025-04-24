import React, { useState } from "react";
import Tracks from "../contentTabs/Tracks";
import Playlist from "../contentTabs/Playlist";
import Albums from "../contentTabs/Albums";
import PendingReviwes from "../contentTabs/PendingReviwes";
import { Add } from "@mui/icons-material";
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CloudUpload, Link as LinkIcon } from "@mui/icons-material"

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
      {/* Header Section with Title, Subtitle and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          {/* Title and Subtitle (Left) */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Content</h1>
            <h3 className="text-xl font-semibold text-gray-600">Manage User Data</h3>
          </div>

          {/* Add Button (Right) */}
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <Add fontSize="small" />
              Add New Track
            </button>
          </div>
        </div>

      {/* Tabs Navbar */}
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

      {/* Tab Content */}
      <div className="p-4 bg-white shadow rounded-xl">
        <ActiveComponent />
      </div>
      {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-5xl">
              
              {/* Modal Header */}
              <h2 className="text-2xl font-semibold mb-1">New Track</h2>
              <p className="text-gray-600 mb-4">Fill in the below details to upload</p>

              {/* Card Layout */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md space-y-6">
                <h4 className="text-lg font-medium">Title</h4>
                <p className="text-sm text-gray-500 mb-4">Provide the necessary track information.</p>

                {/* First 6 Fields - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextField fullWidth size="small" label="Title" />
                  <TextField fullWidth size="small" label="Category" />
                  <TextField fullWidth size="small" label="Artist Name" />
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    label="Date of Submission"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField fullWidth size="small" label="Duration (mm:ss)" />
                  <TextField fullWidth size="small" label="Language" />
                </div>

                {/* 2 Columns for Media and Lyrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Media Upload Section */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Upload Track</p>
                    <RadioGroup defaultValue="upload">
                      <FormControlLabel
                        value="upload"
                        control={<Radio size="small" />}
                        label={
                          <span className="flex items-center gap-1">
                            <CloudUpload fontSize="small" /> Upload Media File
                          </span>
                        }
                      />
                      <FormControlLabel
                        value="url"
                        control={<Radio size="small" />}
                        label={
                          <span className="flex items-center gap-1">
                            <LinkIcon fontSize="small" /> Upload via URL
                          </span>
                        }
                      />
                    </RadioGroup>
                  </div>

                  {/* Lyrics Description */}
                  <div>
                    <TextField
                      label="Lyrics / Description"
                      multiline
                      rows={5}
                      fullWidth
                      size="small"
                    />
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
