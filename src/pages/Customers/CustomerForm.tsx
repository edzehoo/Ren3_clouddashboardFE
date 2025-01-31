import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCreateCustomer } from "../../hooks/useCreateCustomer";
import "./styles.scss";

const CustomerForm: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [industry, setIndustry] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const { createCustomer, error, success } = useCreateCustomer();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const customer = { companyName, countryOfOrigin, companyRegistrationNumber, companySize, industry, officeAddress };
    console.log('Customer created:', customer);
    await createCustomer(customer);
    if (success) {
      navigate("/customer");
    }
  };

  return (
    <div className="customer-form">
      <div className='container'>
        <h1>Create New Customer</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='formGroup'>
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label>Country Of Origin</label>
            <input
              type="text"
              value={countryOfOrigin}
              onChange={(e) => setCountryOfOrigin(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label>Company Registration Number</label>
            <input
              type="text"
              value={companyRegistrationNumber}
              onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label>Company Size</label>
            <input
              type="text"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label>Industry</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label>Office Address</label>
            <input
              type="text"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='submitButton'>
            Create
          </button>
          {error && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
