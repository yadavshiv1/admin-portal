import React from "react";
import UserDetails from "../userDetails/UserDetails";

export default function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <UserDetails />
    </div>
  );
}
