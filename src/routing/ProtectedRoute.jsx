// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin người dùng từ localStorage

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== role) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
