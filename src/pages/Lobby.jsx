import React from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full h-full">
            <h1 className="text-4xl font-bold mb-8">Welcome to Chat App</h1>
            <div className="space-x-4">
                <Link to="/login">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Lobby;