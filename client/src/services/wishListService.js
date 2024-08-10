import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

export const getWishList = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/wishlist/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        throw error;
    }
};
// Thêm sản phẩm vào danh sách yêu thích
export const addToWishList = async (userId, productId) => {
    try {
        const response = await axios.post(`${API_URL}/wishlist`, {
            userId,
            productId,
        });
        return response.data;
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        throw error;
    }
};

// Xóa sản phẩm khỏi danh sách yêu thích
export const removeFromWishList = async (userId, productId) => {
    try {
        const response = await axios.delete(`${API_URL}/wishlist/${userId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        throw error;
    }
};
