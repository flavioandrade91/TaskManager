import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Register from './componentes/Register';
import TaskList from './componentes/TaskList';
import Logout from './componentes/Logout';
import Home from './componentes/Home'; // Opcional
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Opcional */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/task" element={<TaskList />} />
                </Route>
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
};

export default App;
