import React, { useState } from 'react';
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import contactIcon from "../../assets/contactIcon.svg";

export default function UserDetails() {
  const userStatus = 'Inactive'; // change to 'Active' or 'Inactive'
  const isActive = userStatus === 'Active';

  const activeTabs = ['Preferences', 'Listening', 'Payment History'];
  const inactiveTabs = ['Content Shared', 'Content Pending Review'];

  const tabs = isActive ? activeTabs : inactiveTabs;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const artist = ["Title Three", "Title One", "Title Two", "Title Three"];
  const genre = ["Title Three", "Title One", "Title Two", "Title Three"];
  const mlc = ["Podcast"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Preferences':
        return(
          <div className="p-4 space-y-3 space-x-4">
            <h3 className='pl-4'>Artist</h3>
              {artist.map((title, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium text-gray-700 inline-block"
                  >
                    {title}
                  </div>
                ))}
            <h3>Genre</h3>
              {genre.map((title, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium text-gray-700 inline-block"
                  >
                    {title}
                  </div>
                ))}
            <h3>Most Listening Category</h3>
              {mlc.map((title, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium text-gray-700 inline-block"
                  >
                    {title}
                  </div>
                ))}
        </div>
        );
      case 'Listening':
        return (
          <div className="space-y-6 p-6">
            {/* Two Info Boxes */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {[1, 2].map((_, i) => (
                <div key={i} className="border border-gray-300 rounded-md p-6 w-full md:w-1/2 text-center bg-white">
                  <h3 className="text-lg font-semibold text-gray-800">Box Title {i + 1}</h3>
                  <p className="text-sm text-gray-600 mt-2">This is a short description for box {i + 1}.</p>
                </div>
              ))}
            </div>

            {/* Section Title */}
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Recent Activities</h2>

            {/* Cards List */}
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between items-center border border-gray-300 rounded-md bg-white p-4">
                  <div>
                    <div className="text-md font-medium text-gray-800">Track Name {i + 1}</div>
                    <div className="text-sm text-gray-500">Author {i + 1}</div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>12:30 PM</div>
                    <div>26 Apr 2025</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        );
      case 'Payment History':
        return (
          <div className="space-y-6 p-6">
            {/* Section Title */}
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Transaction History</h2>

            {/* Cards List */}
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between items-center border border-gray-300 rounded-md bg-white p-4">
                  {/* Left: Date */}
                  <div className="text-sm text-gray-600">
                    26 Apr 2025
                  </div>

                  {/* Right: Amount and Status */}
                  <div className="text-right text-sm">
                    <div className="font-semibold text-gray-800">₹1,500</div>
                    <div className="text-green-600">Success</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        );
      case 'Content Shared':
        return <div className="mt-4">This is the content shared tab.</div>;
      case 'Content Pending Review':
        return <div className="mt-4">This is the payment history tab.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">User Details</h3>
          <p className="text-gray-500">View user details</p>
        </div>
        <div className={`text-sm font-medium ${userStatus === "Inactive"? "bg-[#F973161A] border border-[#F97316] rounded-md py-2 px-6 text-[#F97316]": "text-green-600"}`}>{userStatus}</div>
      </div>

      <div className="p-6 space-y-6 bg-white rounded-xl shadow">
        {/* User Info */}
        <div className="w-full flex flex-wrap justify-between items-center gap-6">
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-600 flex gap-2 py-2"><img src={contactIcon} alt="Logo" className="h-7 w-7" />Artist</p>
            <p className="text-gray-600 flex gap-2"><img src={emailIcon} alt="Logo" className="h-7 w-7" />john@example.com</p>
            <p className="text-gray-600 flex gap-2 py-2"><img src={phoneIcon} alt="Logo" className="h-7 w-7" />+91 98765 43210</p>
          </div>
          <div className='bg-sky-100 rounded-md p-6 px-12'>
            <h4 className="font-semibold">Status</h4>
            <p className="text-green-500 bg-white p-2 rounded-md text-center">Approved</p>
          </div>
          <div className='bg-sky-100 rounded-md p-6 px-12'>
            <h4 className="font-semibold">Subscription</h4>
            <p className="text-sky-500 bg-white p-2 rounded-md text-center">Premium</p>
          </div>
          <div className='bg-sky-100 rounded-md p-8 px-12'>
            <h4 className="font-semibold">Join Date</h4>
            <p className="text-gray-600">2024-06-15</p>
          </div>
          <div className='bg-sky-100 rounded-md p-8 px-12'>
            <h4 className="font-semibold">Last Login</h4>
            <p className="text-gray-600">2025-04-20 10:34 AM</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6 border-b w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 text-sm font-medium text-center ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
