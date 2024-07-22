import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

// tạo hàm định danh duy nhất cho mỗi mục trong giỏ hàng
//  dựa trên { id - màu sắc - và kích cỡ } của nó.
const createUniqueId = (item) => `${item.id}-${item.color}-${item.size}`;

// Hàm xử lý các thay đổi đối với trạng thái giỏ hàng dựa trên các hành động (action)
const cartReducer = (state, action) => {
    switch (action.type) {
        // Thêm mục mới vào giỏ hàng hoặc cập nhật số lượng nếu mục đó đã tồn tại
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const uniqueId = createUniqueId(newItem);
            // cập nhật số lượng nếu mục đó đã tồn tại
            const existingItem = state.find((item) => createUniqueId(item) === uniqueId);

            if (existingItem) {
                return state.map((item) =>
                    createUniqueId(item) === uniqueId ? { ...item, quantity: item.quantity + newItem.quantity } : item,
                );
            } else {
                return [...state, { ...newItem, uniqueId }];
            }
        // Xóa một mục khỏi giỏ hàng dựa trên uniqueId.
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.uniqueId !== action.payload);
        // Cập nhật số lượng của một mục trong giỏ hàng dựa trên uniqueId
        case 'UPDATE_QUANTITY':
            return state.map((item) =>
                item.uniqueId === action.payload.uniqueId ? { ...item, quantity: action.payload.quantity } : item,
            );

        default:
            return state;
    }
};
// component bao bọc các thành phần con và cung cấp trạng thái giỏ hàng và các hành động liên quan
// useReducer được sử dụng để quản lý trạng thái giỏ hàng với cartReducer
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });
    //Dữ liệu giỏ hàng được lưu trong localStorage để duy trì trạng thái khi trang web được tải lại.
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    //
    const addToCart = (product) => {
        const uniqueId = createUniqueId(product);
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, uniqueId } });
    };
    //
    const removeFromCart = (uniqueId) => dispatch({ type: 'REMOVE_FROM_CART', payload: uniqueId });
    //
    const updateQuantity = (uniqueId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { uniqueId, quantity } });

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
// custom hook giúp dễ dàng sử dụng CartContext trong các component con.
export const useCart = () => {
    const context = useContext(CartContext);
    // Nếu useCart được sử dụng bên ngoài CartProvider, nó sẽ ném ra một lỗi.
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
/*
Đoạn mã này tạo một context và provider cho giỏ hàng,
quản lý trạng thái giỏ hàng bằng useReducer và lưu trữ trạng thái giỏ hàng trong localStorage. 
Nó cũng cung cấp các hành động để thêm, xóa và cập nhật số lượng mục trong giỏ hàng. 
Custom hook useCart giúp sử dụng context này dễ dàng hơn trong các component con.
# NGUỒN TỪ CHAT GPT chứ đọc lú vl
*/
