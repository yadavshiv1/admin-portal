import React, { useState } from 'react';

export default function UserDetails() {
  const userStatus = 'Inactive'; // change to 'Active' or 'Inactive'
  const isActive = userStatus === 'Active';

  const activeTabs = ['Overview', 'Activity', 'Settings'];
  const inactiveTabs = ['Content Shared', 'Payment History'];

  const tabs = isActive ? activeTabs : inactiveTabs;

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <div className="mt-4">This is the overview tab content.</div>;
      case 'Activity':
        return <div className="mt-4">This is the activity tab content.</div>;
      case 'Settings':
        return <div className="mt-4">This is the settings tab content.</div>;
      case 'Content Shared':
        return <div className="mt-4">This is the content shared tab.</div>;
      case 'Payment History':
        return <div className="mt-4">This is the payment history tab.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">User Details</h3>
          <p className="text-gray-500">View user details</p>
        </div>
        <div className="text-sm text-indigo-600 font-medium">Status: {userStatus}</div>
      </div>

      <div className="p-6 space-y-6 bg-white rounded-xl shadow">
        {/* User Info */}
        <div className="w-full flex flex-wrap justify-between items-center gap-6">
          <div>
            <h4 className="font-semibold">Name</h4>
            <p className="text-gray-600">John Doe</p>
            <p className="text-gray-600">Artist</p>
            <p className="text-gray-600">john@example.com</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-semibold">Status</h4>
            <p className="text-gray-600">Approved</p>
          </div>
          <div>
            <h4 className="font-semibold">Subscription</h4>
            <p className="text-gray-600">Premium</p>
          </div>
          <div>
            <h4 className="font-semibold">Join Date</h4>
            <p className="text-gray-600">2024-06-15</p>
          </div>
          <div>
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
