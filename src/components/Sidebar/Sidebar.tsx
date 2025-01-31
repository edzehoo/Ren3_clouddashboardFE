import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="left-menu">
      <ul>
        <li><Link to="/customer">Customer</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/payment">Payment</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
