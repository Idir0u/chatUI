import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import { useAtom } from 'jotai';
import { apiBaseUrlAtom } from '../atoms/api.js';

const SignUpPage = () => {
    const [apiBaseUrl] = useAtom(apiBaseUrlAtom);
    const navigate = useNavigate();

    const handleSignUp = async (formData) => {
        try {
            const response = await axios.post(`${apiBaseUrl}/users/signup`, formData);
            console.log('onSuccess:', response.data);
            alert('Sign up successful!');
            navigate('/login'); // or just directly navigate to the user's profile page
        } catch (error) {
            console.error('onError:', error);
            alert('Sign up failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <SignupForm onSubmit={handleSignUp} />
            </div>
        </div>
    );
};

export default SignUpPage;
