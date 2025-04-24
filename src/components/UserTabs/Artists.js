import React, { useState } from 'react';
import {
  Switch,
  IconButton,
  Card,
  CardContent,
  Typography,
  TextField,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const dummyUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    date: '2025-04-20',
    status: 'Active',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    date: '2025-04-18',
    status: 'Inactive',
  },
  {
    name: 'Arjun Artist',
    email: 'arjun@artist.com',
    date: '2025-04-15',
    status: 'Active',
  },
];

export default function Xyz() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = dummyUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Artist Users</h2>
        <p className="text-gray-600">Users who provide content to platform</p>
      </div>

      {filteredUsers.map((user, index) => (
        <Card key={index} className="w-full shadow rounded-lg">
          <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">{user.email}</Typography>
              <Typography variant="body2" color="textSecondary">{user.date}</Typography>
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
              <Switch color="primary" />
              <img src="/img/viewIcon.svg" alt="Logo" className="h-7 w-7" />
            </div>
          </CardContent>
        </Card>
      ))}

      {/* No results message */}
      {filteredUsers.length === 0 && (
        <div className="text-gray-500 text-center mt-4">No users found.</div>
      )}
    </div>
  );
}
