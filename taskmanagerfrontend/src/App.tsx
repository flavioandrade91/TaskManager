import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Register from './componentes/Register';
import TaskList from './componentes/TaskList';
import Logout from './componentes/Logout';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/task" element={<TaskList />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
};

export default App;
