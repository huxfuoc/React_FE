// Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Admin from '../page/Admin';
import Students from '../page/Students';
import Lecturers from '../page/Lecturers';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="admin">
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/student"
                    element={
                        <ProtectedRoute role="student">
                            <Students />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/lecturer"
                    element={
                        <ProtectedRoute role="lecturer">
                            <Lecturers />
                        </ProtectedRoute>
                    }
                />
                {/* Thêm các route khác ở đây nếu cần */}
            </Routes>
        </Router>
    );
};

export default AppRouter;