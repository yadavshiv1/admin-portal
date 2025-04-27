import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import artistImg from "../../../assets/artistImg.svg";
import viewIcon from "../../../assets/viewIcon.svg";

const dummyUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    date: '2025-04-20',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    date: '2025-04-18',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Arjun Artist',
    email: 'arjun@artist.com',
    date: '2025-04-15',
    status: 'Active',
  },
];

export default function Abc() {
  const [searchTerm, setSearchTerm] = useState('');
  const [switchStates, setSwitchStates] = useState(() => {
    const initialState = {};
    dummyUsers.forEach(user => {
      initialState[user.id] = user.status === 'Active';
    });
    return initialState;
  });

  const filteredUsers = dummyUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4 font-jakarta">
      <div>
        <h2 className="text-xl font-semibold">Listeners</h2>
        <p className="text-gray-600">Users who listen to the content on platform</p>
      </div>

      {filteredUsers.map((user) => (
        <Card key={user.id} className="w-full shadow rounded-lg">
          <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-6">
              <img src={artistImg} alt="User" className="h-10 w-10 object-contain" />
              <div>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                <Typography variant="body2" color="textSecondary">{user.date}</Typography>
              </div>
            </div>

            <div
              className="text-sm font-medium"
              style={{
                color: user.status === 'Active' ? '#03BE26' :
                       user.status === 'Inactive' ? '#9747FF' :
                       '#6366F1'
              }}
            >
              {user.status}
            </div>

            <div className="flex items-center gap-2">
              <div className="p-3 flex items-center gap-4">
                <img
                  src={switchStates[user.id] ? "/img/enableSwitchicon.svg" : "/img/disabledIcon.svg"}
                  alt="Toggle"
                  className="h-9 w-9 cursor-pointer"
                  onClick={() =>
                    setSwitchStates(prev => ({
                      ...prev,
                      [user.id]: !prev[user.id],
                    }))
                  }
                />
                <button><img src={viewIcon} alt="View" className="h-7 w-7" /></button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredUsers.length === 0 && (
        <div className="text-gray-500 text-center mt-4">No users found.</div>
      )}
    </div>
  );
}
