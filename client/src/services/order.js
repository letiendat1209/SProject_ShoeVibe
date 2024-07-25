import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
