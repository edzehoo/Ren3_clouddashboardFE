// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CustomerList from './pages/Customers/CustomerList';
import CustomerForm from './pages/Customers/CustomerForm';
import SubscriptionList from './pages/Subscriptions/SubscriptionList';
import SubscriptionForm from './pages/Subscriptions/SubscriptionForm';
import PaymentList from './pages/Payments/PaymentList';
import PaymentForm from './pages/Payments/PaymentForm';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<CustomerList />} />
            <Route path="/customer/create" element={<CustomerForm />} />
            <Route path="/subscription" element={<SubscriptionList />} />
            <Route path="/subscription/create" element={<SubscriptionForm />} />
            <Route path="/payment" element={<PaymentList />} />
            <Route path="/payment/create" element={<PaymentForm />} />
        </Routes>
    </Router>
);

export default AppRoutes;
