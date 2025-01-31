// src/pages/Dashboard.tsx

import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Welcome to the Dashboard</h2>
        {/* You can add routes to different modules like Customer, Subscription, Payment here */}
      </div>
    </div>
  );
};

export default Dashboard;

