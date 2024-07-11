import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Task } from '../types';
import TaskItem from './TaskItem';
import AddTaskModal from './AddTaskModal';
import Notification from './Notification';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize] = useState<number>(4); // Limite de tarefas por página
    const [totalTasks, setTotalTasks] = useState<number>(0);
    const [notification, setNotification] = useState<string>('');

    const fetchTasks = async () => {
        try {
            const response = await api.get(`/task?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            const { tasks = [], totalCount = 0 } = response.data || {};
            setTasks(tasks);
            setTotalTasks(totalCount);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [pageNumber, pageSize]);

    const addTask = async (title: string, description: string) => {
        if (!title.trim() || !description.trim()) {
            setNotification('Title and description cannot be empty');
            return;
        }
        try {
            await api.post('/task', { title, description });
            fetchTasks(); // Atualizar a lista de tarefas após adicionar uma nova tarefa
            setNotification('Task added successfully');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateTask = async (updatedTask: Task) => {
        try {
            const taskDto = {
                title: updatedTask.title,
                description: updatedTask.description,
                isCompleted: updatedTask.isCompleted
            };
            await api.put(`/task/${updatedTask.id}`, taskDto);
            fetchTasks(); // Atualizar a lista de tarefas após atualizar uma tarefa
            setNotification('Task updated successfully');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (taskId: string) => {
        try {
            await api.delete(`/task/${taskId}`);
            fetchTasks(); // Atualizar a lista de tarefas após excluir uma tarefa
            setNotification('Task deleted successfully');
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const updateTaskStatus = async (taskId: string, isCompleted: boolean) => {
        try {
            await api.patch(`/task/${taskId}/status`, { isCompleted });
            fetchTasks(); // Atualizar a lista de tarefas após mudar o status de uma tarefa
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    const handleNextPage = () => {
        if (pageNumber * pageSize < totalTasks) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">Task List</h1>
            <button
                onClick={() => setShowAddTaskModal(true)}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4 transition duration-300 ease-in-out transform"
            >
                Add Task
            </button>
            {showAddTaskModal && (
                <AddTaskModal
                    onSave={addTask}
                    onClose={() => setShowAddTaskModal(false)}
                />
            )}
            <ul className="w-full max-w-md">
                {tasks && tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id} className="mb-2">
                            <TaskItem
                                task={task}
                                onUpdate={updateTask}
                                onDelete={deleteTask}
                                onStatusChange={updateTaskStatus}
                            />
                        </li>
                    ))
                ) : (
                    <li>No tasks available</li>
                )}
            </ul>
            <div className="flex justify-between mt-4 w-full max-w-md">
                <button
                    onClick={handlePreviousPage}
                    disabled={pageNumber === 1}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={pageNumber * pageSize >= totalTasks}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform"
                >
                    Next
                </button>
            </div>
            <Link
                to="/logout"
                className="mt-4 text-blue-500 hover:underline transition duration-300 ease-in-out transform"
            >
                Logout
            </Link>
            {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification('')}
                />
            )}
        </div>
    );
};

export default TaskList;
