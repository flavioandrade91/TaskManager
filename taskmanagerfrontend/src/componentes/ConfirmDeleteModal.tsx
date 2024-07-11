import React from 'react';

interface ConfirmDeleteModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform">
                <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
                <p className="mb-4">Are you sure you want to delete this task?</p>
                <div className="flex justify-end">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 mr-2"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
