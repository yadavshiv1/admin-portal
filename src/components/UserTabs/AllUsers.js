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

const dummyUsers = [
  { name: 'John Doe', email: 'john@example.com', date: '2024-04-01', role: 'Pending' },
  { name: 'Jane Smith', email: 'jane@example.com', date: '2024-03-20', role: 'Pending' },
  { name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', role: 'Pending' },
  { name: 'Bob Williams', email: 'bob@example.com', date: '2024-02-15', role: 'Pending' },
];

export default function AllUsers() {
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
      <TextField
        fullWidth
        label="Search by name or email"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />

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
                        color="success"
                        onClick={() => handleRoleChange(user.email, 'Approved')}
                        sx={{ mr: 1 }}
                      >
                        Approve
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => handleRoleChange(user.email, 'Rejected')}
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
