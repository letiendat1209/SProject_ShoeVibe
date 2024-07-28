import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

// Tạo đơn hàng mới
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Lấy tất cả đơn hàng
export const getAllOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Lấy chi tiết đơn hàng theo ID
export const getOrderDetails = async (orderId) => {
    try {
        const response = await axios.get(`${API_URL}/orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Cập nhật trạng thái đơn hàng
export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.put(`${API_URL}/orders/${orderId}/status`, { status });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Cập nhật trạng thái thanh toán của đơn hàng
export const updateOrderPaymentStatus = async (orderId, paymentStatus) => {
    try {
        const response = await axios.put(`${API_URL}/orders/${orderId}/payment-status`, {
            payment_status: paymentStatus,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Xóa đơn hàng
export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${API_URL}/orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Lấy tất cả đơn hàng theo trạng thái thanh toán
export const getAllOrdersByPaymentStatus = async (paymentStatus) => {
    try {
        const response = await axios.get(`${API_URL}/orders/payment-status/${paymentStatus}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
