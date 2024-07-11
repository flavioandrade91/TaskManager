import React, { useState } from 'react';
import { Task } from '../types';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import Notification from './Notification';

interface TaskItemProps {
    task: Task;
    onUpdate: (task: Task) => void;
    onDelete: (taskId: string) => void;
    onStatusChange: (taskId: string, isCompleted: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete, onStatusChange }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);
    const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);
    const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
    const [notification, setNotification] = useState<string>('');

    const handleSave = () => {
        if (!title.trim() || !description.trim()) {
            setNotification('Title and description cannot be empty');
            return;
        }
        onUpdate({ ...task, title, description, isCompleted });
        setIsEditing(false);
        setNotification('Task updated successfully');
    };

    const handleStatusChange = () => {
        const newStatus = !isCompleted;
        setIsCompleted(newStatus);
        onStatusChange(task.id, newStatus);
    };

    const handleDelete = () => {
        setShowConfirmDelete(true);
    };

    const confirmDelete = () => {
        onDelete(task.id);
        setShowConfirmDelete(false);
        setNotification('Task deleted successfully');
    };

    const cancelDelete = () => {
        setShowConfirmDelete(false);
    };

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform ${isCompleted ? 'bg-green-100' : 'bg-white'}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p>{description}</p>
                    <div className="flex items-center mt-2">
                        <button
                            onClick={handleStatusChange}
                            className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-75 ${isCompleted ? 'bg-green-500 hover:bg-green-700 focus:ring-green-400' : 'bg-red-500 hover:bg-red-700 focus:ring-red-400'}`}
                        >
                            {isCompleted ? 'Complete' : 'Incomplete'}
                        </button>
                    </div>
                    <div className="flex mt-4">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 ml-2"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
            {showConfirmDelete && (
                <ConfirmDeleteModal
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
            {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification('')}
                />
            )}
        </div>
    );
};

export default TaskItem;
