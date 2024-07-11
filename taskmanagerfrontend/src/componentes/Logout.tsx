import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        navigate('/login'); // Use navigate diretamente
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Logging out...</p>
            </div>
        </div>
    );
};

export default Logout;
