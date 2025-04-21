import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dashboard from "./components/tabs/Dashboard";
import Content from "./components/tabs/Content";
import Analytics from "./components/tabs/Analytics";
import Users from "./components/tabs/Users";
import Settings from "./components/tabs/Settings";
import Support from "./components/tabs/Support";
import Feedback from "./components/tabs/Feedback";
import Help from "./components/tabs/Help";
import Logout from "./components/tabs/Logout";

// Map tabs to their respective components
const tabComponents = {
  Dashboard,
  Content,
  Analytics,
  Users,
  Settings,
  Support,
  Feedback,
  Help,
  Logout,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0"} overflow-hidden`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Toggle Button to open/close sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-14 z-50 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "left-64" : "left-0"
        }`}
      >
        {isSidebarOpen ? (
          <ArrowBackIosNewIcon className="w-5 h-5" />
        ) : (
          <ArrowForwardIosIcon className="w-5 h-5" />
        )}
      </button>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-12 sm:ml-0">
        <Navbar />
        <main className="p-6 text-lg">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}
