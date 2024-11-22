import React from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { apiBaseUrlAtom } from '../atoms/api';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [apiBaseUrl] = useAtom(apiBaseUrlAtom);

    const mutation = useMutation(credentials => {
        return axios.post(`${apiBaseUrl}/users/login`, credentials);
    },
    {
        onMutate: () => {
            console.log('Attempting to log in user');
        },
        onError: (error) => {
            console.error('Login error:', error);
        },
        onSuccess: (data) => {
            console.log('Login successful:', data);
        },
        onSettled: () => {
            console.log('Login process completed');
        },
    });

    const handleLogin = async (formData) => {
        try {
            await mutation.mutateAsync(formData);
            alert('Login successful!');
        } catch (error) {
            alert('Login failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;