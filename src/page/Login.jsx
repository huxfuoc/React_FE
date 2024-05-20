// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.scss';

const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'student', password: 'student123', role: 'student' },
    { username: 'lecturer', password: 'lecturer123', role: 'lecturer' }
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            alert(`Login successful! Role: ${user.role}`);
            localStorage.setItem('user', JSON.stringify(user));
            if (user.role === 'admin') {
                navigate('/admin');
            } else if (user.role === 'student') {
                navigate('/student');
            } else if (user.role === 'lecturer') {
                navigate('/lecturer');
            }
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='container'>
            <div className="login-container">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleLogin} className='login-form'>
                    <div className="form-group">
                        <label htmlFor="username">Tài khoản:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
