// src/pages/Payments.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<any[]>([]);
  const navigate = useNavigate();

  const addPayment = () => {
    // Logic to add payment
    navigate('/payment/create');
  };

  const updatePayment = (id: string) => {
    // Logic to update payment
  };

  const deletePayment = (id: string) => {
    // Logic to delete payment
  };

  return (
    <div>
      <h2>Manage Payments</h2>
      <button onClick={addPayment}>Add Payment</button>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            {payment.amount}
            <button onClick={() => updatePayment(payment.id)}>Update</button>
            <button onClick={() => deletePayment(payment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
