import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = ({ onSubmit }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [div1, setDiv1] = useState(true);
    const password = watch('password');

    const onSubmitForm = (data) => {
        onSubmit(data);
    };

    const handleNext = () => {
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            setDiv1(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data" className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            {div1 && 
                (
                <div>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            {...register('username', { required: true, pattern: /^[a-zA-Z0-9_]{3,16}$/ })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.username && <p className="text-red-500 text-xs italic">Username is required and should be 3-16 characters long.</p>}
                    </div>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="Phone" 
                            {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.phone && <p className="text-red-500 text-xs italic">Phone number is required and should be 10 digits long.</p>}
                    </div>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            {...register('firstName', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.firstName && <p className="text-red-500 text-xs italic">First name is required.</p>}
                    </div>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            {...register('lastName', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.lastName && <p className="text-red-500 text-xs italic">Last name is required.</p>}
                    </div>
                    <div className="mb-4">
                        <button type="button" onClick={handleSubmit(handleNext)} className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Next ---&gt;
                        </button>
                    </div>
                </div>
                )
            }
            {!div1 && 
                (
                <div>
                    <div className="mb-4">
                        <button type="button" onClick={() => setDiv1(true)} className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            &lt;-- Go Back
                        </button>
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            {...register('password', { required: true, minLength: 6 })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">Password is required and should be at least 6 characters long.</p>}
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            {...register('confirmPassword', { 
                                required: true, 
                                validate: value => value === password || "Passwords do not match" 
                            })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">Profile Picture</label>
                        <input 
                            type="file" 
                            name="profilePicture" 
                            {...register('profilePicture')}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
                </div>
                )
            }
        </form>
    );
};

export default SignupForm;