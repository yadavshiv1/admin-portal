import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Chart from "../../components/Chart"
import CircleChart from "../../components/CircleChart"

export default function Dashboard() {

  return (
    <div className="space-y-6 font-jakarta">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <h3 className="text-xl text-gray-600">Overview of the app</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-jakarta font-semibold">
        <div className="bg-[#F8D4FF66] rounded-xl shadow p-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 space-y-1">
              <p className="text-sm text-gray-700">Total Users</p>
              <p className="text-sm text-gray-700">123,456</p>
              <p className="text-sm text-gray-700">+15% last Month</p>
            </div>
            <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
            <img src="/img/userManagementIcon.svg" alt="Logo" className="h-7 w-7" />
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
            <img src="/img/contentManagementIcon.svg" alt="Logo" className="h-7 w-7" />
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
            <img src="/img/activesubIcon.svg" alt="Logo" className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Total Plays</h4>
            <div>Date</div>
          </div>
          <Chart />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-gray-700">User Overview</h4>
          <p className="text-sm text-gray-500 mt-2">
            Monitor performance of your most popular products here.
          </p>
          <div>
            <CircleChart />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-gray-700">User Feedback</h4>
          <p className="text-sm text-gray-500 mt-2">
            Collect and analyze feedback to improve user experience.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-gray-700">System Health</h4>
          <p className="text-sm text-gray-500 mt-2">
            Real-time server status, uptime and response analytics.
          </p>
        </div>
      </div>
    </div>
  );
}
