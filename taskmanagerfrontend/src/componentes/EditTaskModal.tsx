import React, { useState } from 'react';
import { Task } from '../types';

interface EditTaskModalProps {
    task: Task;
    onSave: (task: Task) => void;
    onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave, onClose }) => {
    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);

    const handleSave = () => {
        onSave({ ...task, title, description });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Task</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;
