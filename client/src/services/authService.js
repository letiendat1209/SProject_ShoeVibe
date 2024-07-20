import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Thay thế bằng URL thực tế của server

// Hàm đăng ký
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Hàm đăng nhập
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
