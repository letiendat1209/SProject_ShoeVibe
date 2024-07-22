import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

// Hàm lấy loại sản phẩm
export const getCategory = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/category`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getCategoryById = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/category/${categoryId}`);
        return response.data.data; // Giả sử dữ liệu trả về từ thuộc tính data
    } catch (error) {
        throw error.response.data;
    }
};
