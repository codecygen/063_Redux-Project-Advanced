// React-Redux-Toolkit-Cart-Slice-File

// React-Redux-Action-Creator-Thunk
import { uiActions } from './ui-slice';

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

// React-Redux-Action-Creator-Thunk
const sendCartData = (cartData) => {
    return (dispatch) => {
        const sendCartData = async () => {
            const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });

            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            }));

            if (!res.ok) {
                throw new Error('Sending cart data failed.');
            }
        }
    };
};

export const cartActions = cartSlice.actions;
export default cartSlice;