import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
    task: Task;
    onUpdate: (task: Task) => void;
    onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onUpdate(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
