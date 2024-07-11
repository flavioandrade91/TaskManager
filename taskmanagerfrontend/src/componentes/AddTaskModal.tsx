import React, { useState } from 'react';
import Notification from './Notification';

interface AddTaskModalProps {
    onSave: (title: string, description: string) => void;
    onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [notification, setNotification] = useState<string>('');

    const handleSave = () => {
        if (!title.trim() || !description.trim()) {
            setNotification('Title and description cannot be empty');
            return;
        }
        onSave(title, description);
        onClose();
        setNotification('Task added successfully');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Add Task</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Save
                </button>
                <button
                    onClick={onClose}
                    className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 mt-2"
                >
                    Cancel
                </button>
                {notification && (
                    <Notification
                        message={notification}
                        onClose={() => setNotification('')}
                    />
                )}
            </div>
        </div>
    );
};

export default AddTaskModal;
