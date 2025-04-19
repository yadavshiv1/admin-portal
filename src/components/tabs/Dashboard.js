import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function Dashboard() {
  const topBoxes = [
    {
      title: PeopleOutlineIcon,
      items: ["Total Users", "123,456", "+15% last Month"],
    },
    {
      title: "Revenue",
      items: ["Total Tracks", "123,456", "+15% last Month"],
    },
    {
      title: "Performance",
      items: ["Active Subscribers", "123,456", "+15% last Month"],
    },
  ];

  const cards = [
    {
      title: "Recent Activities",
      content: "View the latest user interactions and updates in the system.",
    },
    {
      title: "Top Products",
      content: "Monitor performance of your most popular products here.",
    },
    {
      title: "User Feedback",
      content: "Collect and analyze feedback to improve user experience.",
    },
    {
      title: "System Health",
      content: "Real-time server status, uptime and response analytics.",
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
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 space-y-1">
                {box.items.map((item, i) => (
                  <p key={i} className="text-sm text-gray-700">{item}</p>
                ))}
              </div>
              <div className="col-span-1 text-gray-500 font-medium">{box.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6">
            <h4 className="text-lg font-semibold text-gray-700">{card.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
