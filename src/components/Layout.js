// src/Components/Layout.js
import React from 'react';
import Sidebar from './sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
