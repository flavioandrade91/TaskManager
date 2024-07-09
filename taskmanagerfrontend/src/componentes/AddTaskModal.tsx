import React, { useState } from 'react';

interface AddTaskModalProps {
    onSave: (title: string, description: string) => void;
    onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSave = () => {
        onSave(title, description);
        onClose();
    };

    return (
        <div>
            <h2>Add Task</h2>
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

export default AddTaskModal;
