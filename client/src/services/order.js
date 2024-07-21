import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

export const createProduct = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/create-order`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
