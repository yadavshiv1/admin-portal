import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dashboard from "./components/tabs/Dashboard";
import Content from "./components/tabs/Content";
import Analytics from "./components/tabs/Analytics";
import Users from "./components/tabs/Users";
import Settings from "./components/tabs/Settings";
import Support from "./components/tabs/Support";
import Feedback from "./components/tabs/Feedback";
import Help from "./components/tabs/Help";
import Logout from "./components/tabs/Logout";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <CloseIcon
            onClick={() => setIsSidebarOpen(false)}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
        </div>
        <Sidebar activeTab={activeTab} setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false); // close sidebar on tab click
        }} />
      </div>

      <div
        className={`hidden sm:block transition-all duration-300 bg-white shadow-lg h-full ${
          isDesktopSidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Hamburger Button (Only on Mobile) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="absolute top-4 left-4 z-40 sm:hidden bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
      >
        <MenuIcon />
      </button>
      
      <button
        onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
        className="hidden sm:flex absolute top-20 transform -translate-y-1/2 z-40 bg-white rounded-full shadow-md w-10 h-10 items-center justify-center"
        style={{ left: isDesktopSidebarOpen ? "16rem" : "0.5rem" }} // Adjust based on sidebar width
      >
        {isDesktopSidebarOpen ? (
          <ArrowBackIosNewIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ArrowForwardIosIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-y-auto">
        <Navbar />
        <main className="p-6 text-lg flex-1 overflow-y-auto">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}
