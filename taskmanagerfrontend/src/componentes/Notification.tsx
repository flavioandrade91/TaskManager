import React from 'react';

interface NotificationProps {
    message: string;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 underline">Close</button>
        </div>
    );
};

export default Notification;
