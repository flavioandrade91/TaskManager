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
        <div>
            <h2>Edit Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default EditTaskModal;
