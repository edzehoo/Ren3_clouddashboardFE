import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
  const [subscriptionType, setSubscriptionType] = useState('');

  const handleSubmit = () => {
    console.log('Subscription created:', subscriptionType);
  };

  return (
    <div className="subscription-form">
      <h3>Create/Update Subscription</h3>
      <input
        type="text"
        value={subscriptionType}
        onChange={(e) => setSubscriptionType(e.target.value)}
        placeholder="Subscription Type"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubscriptionForm;
