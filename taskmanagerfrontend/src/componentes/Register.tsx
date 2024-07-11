import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ModalRegister from './ModalRegister';

const Register: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');
    const [modalTitle, setModalTitle] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setModalTitle('Error');
            setModalMessage('All fields are required');
            setShowModal(true);
            return;
        }
        if (password !== confirmPassword) {
            setModalTitle('Error');
            setModalMessage('Passwords do not match');
            setShowModal(true);
            return;
        }
        if (password.length < 6) {
            setModalTitle('Error');
            setModalMessage('Password must be at least 6 characters long');
            setShowModal(true);
            return;
        }
        try {
            await api.post('/auth/register', { name, email, passwordHash: password });
            setModalTitle('Success');
            setModalMessage('User registered successfully');
            setShowModal(true);
        } catch (error) {
            console.error('Registration failed', error);
            setModalTitle('Error');
            setModalMessage('Registration failed, please try again');
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (modalTitle === 'Success') {
            navigate('/login'); // Navigate to login page after successful registration
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {showModal && <ModalRegister title={modalTitle} message={modalMessage} onClose={handleCloseModal} />}
        </div>
    );
};

export default Register;
