import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

// Hàm lấy loại sản phẩm
export const getColor = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/color`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
