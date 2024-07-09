import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Task } from '../types';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('/task');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async () => {
        try {
            const response = await api.post('/task', { title, description });
            setTasks([...tasks, response.data]);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateTask = async (updatedTask: Task) => {
        try {
            await api.put(`/task/${updatedTask.id}`, updatedTask);
            setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (taskId: string) => {
        try {
            await api.delete(`/task/${taskId}`);
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskItem task={task} onUpdate={updateTask} onDelete={deleteTask} />
                    </li>
                ))}
            </ul>
            
            <Link to="/logout">Logout</Link>
        </div>
    );
};

export default TaskList;
