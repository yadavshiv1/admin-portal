import React, { useState } from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Chart from "../../components/Chart/Chart"
import CircleChart from "../../components/Chart/CircleChart"
import UserManagementIcon from "../../assets/userManagementIcon.svg";
import contentManagementIcon from "../../assets/contentManagementIcon.svg";
import activesubIcon from "../../assets/activesubIcon.svg";

const allData = [
  { month: 'Jan', value: 40, date: '2025-01-15' },
  { month: 'Feb', value: 55, date: '2025-02-20' },
  { month: 'Mar', value: 30, date: '2025-03-10' },
  { month: 'Apr', value: 70, date: '2025-04-05' },
  { month: 'Dec', value: 60, date: '2024-12-18' },
  { month: 'Dec ', value: 90, date: '2024-12-25' },
];

const CircleChartData = [
  { month: '2025-03', label: 'Chrome', value: 52, color: '#259CE5' },
  { month: '2025-02', label: 'Safari', value: 33, color: '#FEE43D99' },
  { month: '2025-04', label: 'Firefox', value: 15, color: '#EEECF6' },
  { month: '2025-05', label: 'Chrome', value: 60, color: '#259CE5' },
  { month: '2025-05', label: 'Safari', value: 30, color: '#FEE43D99' },
  { month: '2025-05', label: 'Firefox', value: 10, color: '#EEECF6' },
];


function formatMonthYear(dateString) {
  const options = { month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const getCurrentMonthYear = () => {
  const now = new Date();
  return now.toISOString().slice(0, 7);
};

const getLast4Months = () => {
  const months = [];
  const now = new Date();
  for (let i = 3; i >= 0; i--) { 
    const month = new Date(now.getFullYear(), now.getMonth() - i, 1); 
    const formattedMonth = month.toISOString().slice(0, 7); 
    months.push(formattedMonth);
  }
  return months;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Positive");
  // const role = localStorage.getItem("role");
  const [role, setRole] = useState("admin");
  const currentMonth = getCurrentMonthYear();
  const last4Months = getLast4Months();
  const [fromDate, setFromDate] = useState(last4Months[0]);
  const [toDate, setToDate] = useState(currentMonth);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value); 
  };

    const filteredCircleChartData = CircleChartData.filter((item) => item.month === selectedMonth);

  const filteredData = allData
    .filter((item) => {
      const itemMonth = item.date.substring(0, 7);
      return last4Months.includes(itemMonth);
    })
    .map((item) => ({
      ...item,
      month: formatMonthYear(item.date),
    }));

  return (
    <div className="space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <h3 className="text-xl text-gray-600">Overview of the app</h3>

      {role === "admin" && (<div> <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-jakarta font-semibold">
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#DFF3FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Total Tracks</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={contentManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#A3FF9766] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Active Subscribers</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={activesubIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div></div>)}

      {role === "artist" && (<div><div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-jakarta font-semibold">
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={UserManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#DFF3FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Total Tracks</p>
              <p className="text-sm text-gray-700">123,456</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
              <img src={contentManagementIcon} alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="bg-[#A3FF9766] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-6">
              <p className="text-sm text-gray-700">Active Subscribers</p>
              <p className="text-sm text-gray-700">123,456</p>
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
            <h4 className="text-2xl text-gray-700">Total Plays</h4>
            <div className="flex gap-2">
              <input
                type="month"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border px-2 py-1 rounded w-44"
              />
              <input
                type="month"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border px-2 py-1 rounded w-44"
              />
            </div>
          </div>
          <Chart data={filteredData} />
        </div>
        {role === "admin" && (
          <div>
            <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl text-gray-700">User Overview</h4>
              <input
                type="month"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="border px-2 py-1 rounded w-44"
              />
            </div>
              <div>
                <CircleChart data={filteredCircleChartData} selectedMonth={selectedMonth} />
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
                  className={`px-3 py-1 text-sm rounded-full ${activeTab === tab
                      ? "bg-[#F2F9FF] text-black font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

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

          {role === "admin" && (
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
