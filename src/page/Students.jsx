import React from 'react'
import { useNavigate } from 'react-router-dom';


const Students = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Xoá thông tin đăng nhập
        navigate('/login'); // Điều hướng về trang đăng nhập
    };
    return (
        <div>
            trang sinh viên
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    )
}

export default Students
