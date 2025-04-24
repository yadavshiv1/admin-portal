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
      <Box sx={{ display: 'flex', alignItems: 'center',  mb: 3 }}>
          <TextField
            fullWidth
            label="Search by name or email"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ mr: 2 ,width:'320px'}}
          />
          <Box
            component="button"
            onClick={() => console.log('Filter clicked')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              color: 'rgb(170, 162, 162)',
              border: '1px solid rgb(143, 139, 139)',
              borderRadius: '8px',
              cursor: 'pointer',
              height: '100%',
            }}
          >
          <img src='/img/filterIcon.svg' alt="filterIcon" className="w-5 h-5" />
            Filter
          </Box>
        </Box>

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
                          src="/img/editIcon.svg"
                          alt="Edit"
                          sx={{ width: 25, height: 25, cursor: 'pointer' }}
                          onClick={() => handleEdit(user)}
                        />
                        <Box
                          component="img"
                          src="/img/viewIcon.svg"
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
