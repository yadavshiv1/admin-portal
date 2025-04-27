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
  IconButton,
} from '@mui/material';
import filterIcon from "../../../assets/filterIcon.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import editIcon from "../../../assets/editIcon.svg";
import viewIcon from "../../../assets/viewIcon.svg";

 const dummyUsers = [
  { name: 'John Doe', email: 'john@example.com', status: 'Pending', role: 'Artist' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Approved', role: 'Listener' },
  { name: 'Alice Johnson', email: 'alice@example.com', status: 'Pending', role: 'Artist' },
  { name: 'Bob Williams', email: 'bob@example.com', status: 'Approved', role: 'Listener' },
  { name: 'Bob Williams', email: 'bob@example.com', status: 'Rejected', role: 'Admin' },
];

export default function AllUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(dummyUsers);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };
  
  const handleView = (user) => {
    console.log("View user:", user);
  };

  return (
    <Box sx={{ p: 3 }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2 w-80">
          <img 
            src={searchIcon}
            alt="Search"
            className="h-5 w-5 text-gray-400 mr-2"
          />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent focus:outline-none placeholder-gray-500 text-sm w-full"
          />
        </div>

        <button 
          onClick={() => console.log('Filter clicked')}
          className="flex items-center space-x-2 px-3 py-1.5 border border-gray-400 rounded-lg text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <img 
            src={filterIcon}
            alt="Filter"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>


      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell
                    sx={{
                      color:
                        user.status === 'Approved'
                          ? 'rgba(3, 190, 38, 1)'
                          : user.status === 'Pending'
                          ? 'rgba(249, 115, 22, 1)'
                          : user.status === 'Rejected'
                          ? 'rgba(240, 87, 75, 1)'
                          : 'inherit',
                      fontWeight: 500,
                    }}
                  >
                    {user.status}
                  </TableCell>

                  <TableCell
                    sx={{
                      background:
                        user.role === 'Artist'
                          ? 'rgba(255, 225, 32, 0.1)'
                          : user.role === 'Listener'
                          ? 'rgba(37, 156, 229, 0.1)'
                          : user.role === 'Admin'
                          ? 'rgba(120, 124, 130, 0.1)'
                          : 'inherit',
                      color:'rgba(80, 87, 94, 1)',
                      fontWeight: 500,
                      border: '1px solid',
                      borderColor:
                        user.role === 'Artist'
                          ? 'rgba(255, 225, 32, 0.6)'
                          : user.role === 'Listener'
                          ? 'rgba(37, 156, 229, 1)'
                          : user.role === 'Admin'
                          ? 'rgba(120, 124, 130, 1)'
                          : 'inherit',
                      borderRadius: '8px',
                      px: 2,
                      py: 0.5,
                      my:4.4,
                      display: 'inline-block',
                      width: '100px',
                      textAlign: 'center',
                    }}
                  >
                    {user.role}
                  </TableCell>

                  <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Box
                          component="img"
                          src={editIcon}
                          alt="Edit"
                          sx={{ width: 25, height: 25, cursor: 'pointer' }}
                          onClick={() => handleEdit(user)}
                        />
                        <Box
                          component="img"
                          src={viewIcon}
                          alt="View"
                          sx={{ width: 25, height: 25, cursor: 'pointer' }}
                          onClick={() => handleView(user)}
                        />
                      </Box>
                    </TableCell>

              </TableRow>
            ))}

            {filteredUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
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
