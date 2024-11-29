import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    {...register('username', { required: true, pattern: /^[a-zA-Z0-9_]{3,16}$/ })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.username && <p className="text-red-500 text-xs italic">Username is required and should be 3-16 characters long.</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    {...register('password', { required: true, minLength: 6 })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.password && <p className="text-red-500 text-xs italic">Password is required and should be at least 6 characters long.</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
        </form>
    );
};

export default LoginForm;