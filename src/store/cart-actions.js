// React-Redux-Toolkit-Cart-Slice-File

// React-Redux-Action-Creator-Thunk
import { uiActions } from './ui-slice';

import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json');

            const data = await res.json();

            if (!res.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Data fetching is failed!'
            }));
        }
    };
};

// React-Redux-Async-Code-Implementation
// React-Redux-Action-Creator-Thunk
export const sendCartData = (cart) => {

    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
            });

            if (!res.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Data is successfully sent!'
            }));

        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Data is failed to sent!'
            }));
        };
    }
};