import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        firstName: '',
        lastName: '',
        profilePicture: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">Profile Picture</label>
                <input type="file" name="profilePicture" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
        </form>
    );
};

export default SignupForm;