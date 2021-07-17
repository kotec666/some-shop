import axios from 'axios'

export const setCartLoaded = (payload) => ({
    type: 'SET_CART_LOADED',
    payload,
})

export const fetchCartItems = () => (dispatch) => {
    dispatch({
        type: 'SET_CART_LOADED',
        payload: false,
    })

    axios.get(`https://60e6c6ee15387c00173e4921.mockapi.io/cart`)
        .then(({ data }) => {
            dispatch(setCartItems(data))
        })
}

export const setCartItems = (items) => ({
    type: 'SET_CART_ITEMS',
    payload: items,
})


