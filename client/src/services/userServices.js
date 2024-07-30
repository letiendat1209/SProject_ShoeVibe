import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server


export const createUser = async (UserData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, UserData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getUserDetails = async (UserId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${UserId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateUserRole = async (UserId, role) => {
    try {
        const response = await axios.put(`${API_URL}/Users/${UserId}/role`, { role });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteUser = async (UserId) => {
    try {
        const response = await axios.delete(`${API_URL}/Users/${UserId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Lấy tất cả đơn hàng theo trạng thái thanh toán
export const getAllUsersByPaymentStatus = async (paymentStatus) => {
    try {
        const response = await axios.get(`${API_URL}/Users/payment-status/${paymentStatus}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
