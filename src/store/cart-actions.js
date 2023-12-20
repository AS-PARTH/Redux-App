import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://http-b7214-default-rtdb.firebaseio.com/cart.json")
            if (!response.ok) {
                throw new Error('could not fetch cart details')
            }
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'fetching cart data Failed!'
                }))
        }
    }
}
export const sentCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
                status: 'pending',
                title: 'sending...',
                message: 'sending cart data!'
            }));

        const sendRequest = async () => {

            const response = await fetch("https://http-b7214-default-rtdb.firebaseio.com/cart.json",
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items , 
                        totalQuantity: cart.totalQuantity,
                    }),
                });
            if (!response.ok) {
                throw new Error('sending  cart   data');
            }
        }

        try {
            await sendRequest();
            dispatch(
                uiAction.showNotification({
                    status: 'success',
                    title: 'Success...',
                    message: 'sent cart data successfully !'
                }))
        } catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'sent cart data Failed!'
                }))
        }


    }
};
