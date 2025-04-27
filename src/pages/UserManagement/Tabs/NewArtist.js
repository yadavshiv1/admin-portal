import React, { useState } from 'react';
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import searchIcon from "../../../assets/searchIcon.svg";

const dummyUsers = [
  { name: 'John Doe', email: 'john@example.com', date: '2024-04-01', role: 'Pending' },
  { name: 'Jane Smith', email: 'jane@example.com', date: '2024-03-20', role: 'Pending' },
  { name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', role: 'Pending' },
  { name: 'Bob Williams', email: 'bob@example.com', date: '2024-02-15', role: 'Pending' },
];

export default function NewArtist() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(dummyUsers);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRoleChange = (email, newRole) => {
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2 w-80 mb-6">
        <img 
          src={searchIcon}
          alt="Search"
          className="h-5 w-5 text-gray-400 mr-2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none placeholder-gray-500 text-sm"
        />
        </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>
                  {user.role === 'Pending' ? (
                    <>
                      <Button
                          size="small"
                          variant="contained"
                          onClick={() => handleRoleChange(user.email, 'Approved')}
                          sx={{ 
                            mr: 1, 
                            backgroundColor: 'rgba(37, 156, 229, 0.1)',
                            border: '1px solid rgba(37, 156, 229, 1)',
                            borderRadius: '8px',
                            color: '#259CE5',
                          }}
                        >
                          Approve
                        </Button>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleRoleChange(user.email, 'Rejected')}
                        sx={{ 
                          mr: 1, 
                          backgroundColor: 'rgba(240, 87, 75, 0.1)',
                          border: '1px solid rgba(240, 87, 75, 1)',
                          borderRadius: '8px',
                          color: 'rgba(240, 87, 75, 1)',
                        }}
                      >
                        Reject
                      </Button>
                    </>
                  ) : (
                    <strong>{user.role}</strong>
                  )}
                </TableCell>
              </TableRow>
            ))}

            {filteredUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
