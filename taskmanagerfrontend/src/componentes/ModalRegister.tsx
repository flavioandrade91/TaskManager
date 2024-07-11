import React from 'react';

interface ModalRegisterProps {
    title: string;
    message: string;
    onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ title, message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalRegister;
