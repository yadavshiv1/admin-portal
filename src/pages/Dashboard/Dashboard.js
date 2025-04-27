import React,{ useState } from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Chart from "../../components/Chart/Chart"
import CircleChart from "../../components/Chart/CircleChart"
import UserManagementIcon from "../../assets/userManagementIcon.svg";
import contentManagementIcon from "../../assets/contentManagementIcon.svg";
import activesubIcon from "../../assets/activesubIcon.svg";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Positive");
  // const role = localStorage.getItem("role");
      const [role, setRole] = useState("admin");

  return (
    <div className="space-y-6 font-jakarta">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <h3 className="text-xl text-gray-600">Overview of the app</h3>

      {role==="admin" &&(<div> <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-jakarta font-semibold">
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#DFF3FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Tracks</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={contentManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#A3FF9766] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Active Subscribers</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={activesubIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div></div>)}
      
      {role==="artist" &&(<div><div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-jakarta font-semibold">
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#DFF3FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Tracks</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={contentManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#A3FF9766] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Active Subscribers</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src={activesubIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
      </div>)}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Total Plays</h4>
            <div>Date</div>
          </div>
          <Chart />
        </div>
        {role==="admin" &&(
          <div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-lg font-semibold text-gray-700">User Overview</h4>
              <p className="text-sm text-gray-500 mt-2">
                Monitor performance of your most popular products here.
              </p>
              <div>
                <CircleChart />
              </div>
            </div>
        </div>
        )}
        <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-700">User Feedback</h4>
                <div className="flex space-x-2">
                  {["User Activity", "Content"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        activeTab === tab
                          ? "bg-[#F2F9FF] text-black font-semibold"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="text-sm text-gray-600 mt-4">
                {activeTab === "User Activity" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">15.7 mins</h1>
                      <p className="text-sm text-gray-500 mt-1">Avg. listening time</p>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">80%</h1>
                      <p className="text-sm text-gray-500 mt-1">Completion rate</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">1200</h1>
                      <p className="text-sm text-gray-500 mt-1">Total Contents</p>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">95%</h1>
                      <p className="text-sm text-gray-500 mt-1">Content Approval</p>
                    </div>
                  </div>
                )}
              </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-lg font-semibold text-gray-700">Recent Activity</h4>

              {role==="admin" &&(
                <div>
                    {[
                      { text: 'Latest user and content activities', time: '12min ago' },
                      { text: 'New user registered: Sarah M.', time: '12Hr ago' },
                      { text: 'New track uploaded: Evening Meditation', time: '2min ago' },
                    ].map((activity, index) => (
                      <div key={index} className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">{activity.text}</p>
                        <span className="text-sm font-medium">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                  )}
        </div>
        
      </div>
    </div>
  );
}
