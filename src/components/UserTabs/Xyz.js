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
    status: 'Pending',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    date: '2025-04-18',
    status: 'Approved',
  },
  {
    name: 'Arjun Artist',
    email: 'arjun@artist.com',
    date: '2025-04-15',
    status: 'Rejected',
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
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">Artist Users</h2>
        <p className="text-gray-600">Users who provide content</p>
      </div>

      {/* Search Bar */}
      <div>
        <TextField
          label="Search by name or email"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Cards */}
      {filteredUsers.map((user, index) => (
        <Card key={index} className="w-full shadow rounded-lg">
          <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* User Info */}
            <div>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">{user.email}</Typography>
              <Typography variant="body2" color="textSecondary">{user.date}</Typography>
            </div>

            {/* Status */}
            <div className="text-sm font-medium text-indigo-600">{user.status}</div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Switch color="primary" />
              <IconButton color="primary">
                <VisibilityIcon />
              </IconButton>
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
