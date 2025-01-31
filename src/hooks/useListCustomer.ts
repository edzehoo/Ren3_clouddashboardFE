import { useState, useEffect } from 'react';
import axios from "axios";

interface Customer {
  id: string;
  companyName: string;
  countryOfOrigin: string;
  companyRegistrationNumber: string;
  companySize: string;
  industry: string;
  officeAddress: string;
  createdAt: string;
  updatedAt: string;
}

export const useListCustomer = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/customers`);
        setCustomers(response.data);
      } catch (err) {
        setError("Error fetching Customers data");
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return { customers, loading, error };
};
