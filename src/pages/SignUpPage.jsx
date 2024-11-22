import React from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import { useAtom } from 'jotai';
import { apiBaseUrlAtom } from '../atoms/api.js';

const SignUpPage = () => {
    const [apiBaseUrl] = useAtom(apiBaseUrlAtom);
    const navigate = useNavigate();

    const mutation = useMutation(newUser => {
        return axios.post(`${apiBaseUrl}/users/signup`, newUser);
    },
    {
        onMutate: (newUser) => {
            console.log('onMutate:', newUser);
        },
        onError: (error, newUser) => {
            console.error('onError:', error);
        },
        onSuccess: (data, newUser) => {
            console.log('onSuccess:', data);
            navigate('/login');//!!!!! or just directly navigate to the user's profile page
        },
        onSettled: (data, error, newUser) => {
            console.log('onSettled:', data);
        },
    }
);

    const handleSignUp = async (formData) => {
        try {
            await mutation.mutateAsync(formData);
            alert('Sign up successful!');
        } catch (error) {
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