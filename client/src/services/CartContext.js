import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const createUniqueId = (item) => `${item.id}-${item.color}-${item.size}`;

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const uniqueId = createUniqueId(newItem);
            const existingItem = state.find((item) => createUniqueId(item) === uniqueId);

            if (existingItem) {
                return state.map((item) =>
                    createUniqueId(item) === uniqueId ? { ...item, quantity: item.quantity + newItem.quantity } : item,
                );
            } else {
                return [...state, { ...newItem, uniqueId }];
            }
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.uniqueId !== action.payload);
        case 'UPDATE_QUANTITY':
            return state.map((item) =>
                item.uniqueId === action.payload.uniqueId ? { ...item, quantity: action.payload.quantity } : item,
            );
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const uniqueId = createUniqueId(product);
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, uniqueId } });
    };

    const removeFromCart = (uniqueId) => dispatch({ type: 'REMOVE_FROM_CART', payload: uniqueId });

    const updateQuantity = (uniqueId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { uniqueId, quantity } });

    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
