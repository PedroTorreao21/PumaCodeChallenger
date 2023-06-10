import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserListItem from './UserListItem';
import UserProfile from './UserProfile';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleAddUser(username) {
    axios.post('/api/users', { username })
      .then(res => {
        setUsers([...users, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleRemoveUser(id) {
    axios.delete(`/api/users/${id}`)
      .then(res => {
        setUsers(users.filter(user => user.id !== id));
        setSelectedUser(null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleSelectUser(user) {
