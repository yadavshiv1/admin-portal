import { TextField, Button } from "@mui/material";
import { useState } from "react";
import BackupIcon from "../../assets/backupIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

export default function AddNewTrack({ setShowModal }) {
  const [uploadedModal, setUploadedModal] = useState(false);

  const handleUpload = () => {
    setUploadedModal(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-6 rounded-xl shadow-xl w-full max-w-6xl overflow-y-auto max-h-screen">

        {!uploadedModal ? (
          <>
            <div className="mb-1">
              <h2 className="text-2xl font-semibold">New Track</h2>
              <p className="text-gray-600">Manage user & permissions</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <div>
                <h4 className="text-lg font-medium">Fill in the below details to upload</h4>
                <p className="text-sm text-gray-500">Review & approve user uploaded content</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Title", placeholder: "Enter the title" },
                  { label: "Category", placeholder: "Enter category" },
                  { label: "Artist Name", placeholder: "Enter artist name" },
                  { label: "Date of Submission", placeholder: "Select date", type: "date" },
                  { label: "Duration (mm:ss)", placeholder: "Ex: 03:45" },
                  { label: "Language", placeholder: "Enter language" },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{field.label}</label>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder={field.placeholder}
                      type={field.type || "text"}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Media Upload */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-gray-700">Media Upload</label>
                  <p className="text-sm text-gray-500">Add your documents here, and you can upload up to 5 files max</p>

                  <div className="w-full border-dashed border-2 border-gray-300 rounded-md p-5 flex flex-col items-center justify-center space-y-2">
                    <img src={BackupIcon} alt="Upload" className="h-12 w-12" />
                    <p className="text-sm text-gray-500">
                      Drag your file(s) or <span className="text-[#1849D6]">browse</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">Only support Mp3 files</p>

                  <div className="relative flex items-center my-1">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Upload from URL</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Add file URL"
                        className="w-full border border-gray-300 rounded-md pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-gray-700 border border-gray-300 text-sm px-3 py-1 rounded-md hover:bg-gray-100">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Add Lyrics or Short Description</label>
                  <TextField
                    placeholder="Text"
                    multiline
                    rows={6}
                    fullWidth
                    size="small"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-white border border-gray-300 text-sm hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm"
                >
                  Upload
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
          <div className="flex justify-between py-4">
            <h3 className="text-2xl font-bold">New Track Uploaded</h3>
            <img src={CloseIcon} alt="Success" className="w-8 h-8 mb-4" onClick={()=>{setUploadedModal(false) ;setShowModal(false)}} />
          </div>
          <p>Your content has been uploaded you will be updated once its reviewed and published</p>
          </div>
        )}
      </div>
    </div>
  );
}
