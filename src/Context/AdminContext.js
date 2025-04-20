// src/context/AdminContext.js
import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  //const [userEmail, setUserEmail] = useState('');
  const [adminId, setAdminId] = useState(null);

  return (
    <AdminContext.Provider value={{ adminId, setAdminId }}>
      {children}
    </AdminContext.Provider>
  );
};
