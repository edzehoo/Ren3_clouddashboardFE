import { useState } from 'react';
import axios from "axios";

interface NewCustomer {
    companyName: string;
    countryOfOrigin: string;
    companyRegistrationNumber: string;
    companySize: string;
    industry: string;
    officeAddress: string;
}

export const useCreateCustomer = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const createCustomer = async (customer: NewCustomer) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/customers`, customer);
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError("Error creating customer");
            setSuccess(false);
        }
    };
    return { createCustomer, error, success };
};
