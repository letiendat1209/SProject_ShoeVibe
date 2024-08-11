import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server

// Xóa variant theo ID
export const deleteVariantById = async (variantId) => {
    try {
        const response = await axios.delete(`${API_URL}/variants/${variantId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting variant:', error);
        throw error;
    }
};

// Cập nhật variant theo ID
export const updateVariantById = async (variantId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/variants/${variantId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating variant:', error);
        throw error;
    }
};
