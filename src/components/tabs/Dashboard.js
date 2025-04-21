import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Chart from "../../components/Chart"
import CircleChart from "../../components/CircleChart"

export default function Dashboard() {
  const topBoxes = [
    {
      title: <PeopleOutlineIcon className="text-blue-500" />,
      items: ["Total Users", "123,456", "+15% last Month"],
    },
    {
      title: <LibraryMusicIcon className="text-blue-500" />,
      items: ["Total Tracks", "123,456", "+15% last Month"],
    },
    {
      title: "Performance",
      items: ["Active Subscribers", "123,456", "+15% last Month"],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Sub Title */}
      <h3 className="text-xl font-semibold text-gray-600">Overview Section</h3>

      {/* Top 3 Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topBoxes.map((box, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            <div className="grid grid-cols-4 gap-2">
              {/* Left: items - takes 3 parts */}
              <div className="col-span-3 space-y-1">
                {box.items.map((item, i) => (
                  <p key={i} className="text-sm text-gray-700">{item}</p>
                ))}
              </div>

              {/* Right: title/icon - takes 1 part */}
              <div className="col-span-1 text-gray-500 font-medium flex items-start justify-end">
                {box.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-gray-700">Total Plays</h4>
          <div>
            Date
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
