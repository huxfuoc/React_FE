import React from 'react'
import { useNavigate } from 'react-router-dom';


const Lecturers = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Xoá thông tin đăng nhập
        navigate('/login'); // Điều hướng về trang đăng nhập
    };
    return (
        <div>
            trang giảng viên
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    )
}

export default Lecturers
