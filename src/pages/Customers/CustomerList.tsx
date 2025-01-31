// src/pages/Customers.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useListCustomer } from '../../hooks/useListCustomer';
import "./styles.scss";

const CustomersList: React.FC = () => {
  const { customers, loading, error } = useListCustomer();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-container">
      <h1 className="title">Customer List</h1>

      {/* Link to the create new entity page */}
      <Link to="/customer/create" className="create-btn">
        Create New Curtomer
      </Link>

      {/* Table displaying the list of entities */}
      <table className="entity-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Country Of Origin</th>
            <th>Company Registration Number</th>
            <th>Company Size</th>
            <th>Industry</th>
            <th>Office Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((entity) => (
            <tr key={entity.id}>
              <td>{entity.companyName}</td>
              <td>{entity.countryOfOrigin}</td>
              <td>{entity.companyRegistrationNumber}</td>
              <td>{entity.companySize}</td>
              <td>{entity.industry}</td>
              <td>{entity.officeAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
