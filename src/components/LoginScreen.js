import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAndContineBtn from "./buttons/LoginAndContinueBtn";
import LoginScreenImage from "../../src/assets/loginScreen.svg";
import GoogleIcon from "../../src/assets/Googleicon.svg"; 

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState("Artist");
  const [showPassword, setShowPassword] = useState(false);
  const [singUp, setSignUp] = useState(false);
  const [loginUp, setLoginUp] = useState(true);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [completeProfile, setCompleteProfile] = useState(false);
  const [selected, setSelected] = useState("artist");
  const navigate = useNavigate();
  // const [role, setRole] = useState(selected);
  
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    password: ""
  }); 

  const handleLogin = () => {
    localStorage.setItem("token", "yogananda-secret-token");
    // localStorage.setItem("role", selected); 
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      <div className="w-1/3">
        <img
          src={LoginScreenImage}
          alt="Login Visual"
          className=" h-screen object-cover"
        />
      </div>

      {loginUp&&(
        <div className="w-1/2 flex py-20 justify-center bg-white">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome to Yogananda Music </h2>
            <p className="text-gray-500 mt-1">Please sign in to your account</p>
          </div>
          <div className="flex space-x-4 mt-4">
          {["Artist", "Admin"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-2 text-sm border rounded-md font-medium transition-colors duration-200
                ${activeTab === tab
                  ? "bg-blue-100 border-blue-500 text-blue-600"
                  : "bg-white border-[#259CE5] text-gray-500 hover:bg-gray-100"}`}
            >
              {tab}
            </button>
          ))}
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="text-center">
            <LoginAndContineBtn
              title="Login"
              handle={() => {
                localStorage.setItem("token", "your-token");
                // localStorage.setItem("role", selected);
                navigate("/dashboard");
              }}
            />

             
            </div>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              or continue login with
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <img src={GoogleIcon} alt="Google Login" className="w-8 h-8 cursor-pointer" />
          </div>

          <p className="text-center text-sm mt-4 text-gray-600">
            New on platform?{" "}
            <a onClick={() => {setSignUp(true);setLoginUp(false);}} className="text-blue-500 hover:underline font-medium">
              Sign up
            </a>
          </p>
          
        </div>
        
      </div>
    )}
      {singUp &&(
        <div className="w-1/2 flex py-20 justify-center bg-white">
          <div className="w-full max-w-md space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Welcome to Yogananda Music </h2>
              <p className="text-gray-500 mt-1">Please sign in to your account</p>
            </div>
          <div className="flex gap-4">
            <div>
            <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
            <label className="block text-sm font-medium mb-1">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
          </div>
          <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-sm text-blue-500 cursor-pointer"
              >
                {showPassword ? "Hide" : "View"}
              </span>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <LoginAndContineBtn handle={()=>{setVerifyEmail(true);setSignUp(false)}} title="Continue"/>
              
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px flex-grow bg-gray-300"></div>
              <span className="text-sm text-gray-500">or continue with</span>
              <div className="h-px flex-grow bg-gray-300"></div>
            </div>

            <button className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md gap-2 hover:bg-gray-50 transition">
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Continue with Google</span>
            </button>
          </div>
        </div>
      )}
      {verifyEmail&&(
        <div className="w-1/2 py-20 justify-center bg-white">
            <div className="w-full max-w-md space-y-6 mb-20">
              <h2 className="text-3xl font-bold text-gray-800">Verify Email</h2>
              <p className="text-gray-500 mt-1">We have sent an verification email to m*****e@gmail.com</p>
            </div>
            <LoginAndContineBtn onClick={()=>{setVerifyEmail(false);setCompleteProfile(true)}} title="Continue"/>
            <p className="text-center text-sm mt-4 text-gray-600">
            Already a user ? 
            <a onClick={() => {setSignUp(true);setLoginUp(false);}} className="text-blue-500 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      )}
      {completeProfile&&(
        <div className="w-1/2 py-20 justify-center bg-white">
            <div className=" max-w-md space-y-6 mb-20">
            <h2 className="text-3xl font-bold text-gray-800">Complete your profile</h2>
            <div className="space-y-6 mb-20">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    name="choice"
                    value="artist"
                    checked={selected === "artist"}
                    onChange={() => setSelected("artist")}
                    className="accent-blue-500"
                  />
                  <span>Artist</span>
                </label>

                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    name="choice"
                    value="admin"
                    checked={selected === "admin"}
                    onChange={() => setSelected("admin")}
                    className="accent-blue-500"
                  />
                  <span>Admin</span>
                </label>
              </div>
              <LoginAndContineBtn onClick={()=>{setVerifyEmail(false);setCompleteProfile(true)}} title="Continue" />
              
            <p className="text-center text-sm mt-4 text-gray-600">
            Already a user ? 
            <a onClick={() => {setSignUp(true);setLoginUp(false);}} className="text-blue-500 hover:underline font-medium">
              Login
            </a>
          </p>
            </div>
        </div>
      )}
    </div>
  );
}