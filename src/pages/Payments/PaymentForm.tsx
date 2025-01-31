import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = () => {
    console.log('Payment created:', paymentAmount);
  };

  return (
    <div className="payment-form">
      <h3>Create/Update Payment</h3>
      <input
        type="number"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
        placeholder="Payment Amount"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PaymentForm;
