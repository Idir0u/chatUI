import React from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { apiBaseUrlAtom } from '../atoms/api';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [apiBaseUrl] = useAtom(apiBaseUrlAtom);

    const handleLogin = async (formData) => {
        try {
            console.log('Attempting to log in user');
            const response = await axios.post(`${apiBaseUrl}/users/login`, formData);
            console.log('Login successful:', response.data);
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed!');
        } finally {
            console.log('Login process completed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <LoginForm onSubmit={handleLogin} />
                <br/>
                <a href='/signup' className="mt-2">Don't have an account yet?</a>
            </div>
        </div>
    );
};

export default LoginPage;
