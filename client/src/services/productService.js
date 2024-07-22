import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Thay thế bằng URL thực tế của server


export const createProduct = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/product`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Hàm lấy tất cả sản phẩm
export const getProduct = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/product`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Hàm lấy sản phẩm theo ID
export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Hàm sửa sản phẩm theo ID
export const updateProductById = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/product/${id}`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Hàm xóa sản phẩm theo ID
export const deleteProductById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/product/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Hàm lấy sản phẩm theo category
export const getProductsByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/product/category/${categoryId}`);
        return response.data.data; // Trả về mảng sản phẩm từ thuộc tính data
    } catch (error) {
        throw error.response.data;
    }
};