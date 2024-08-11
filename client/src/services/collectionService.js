import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

// Hàm lấy loại sản phẩm
export const getCollection = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/collection`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getCollectionById = async (collectionId) => {
    try {
        const response = await axios.get(`${API_URL}/collection/${collectionId}`);
        return response.data.data; // Giả sử dữ liệu trả về từ thuộc tính data
    } catch (error) {
        throw error.response.data;
    }
};
