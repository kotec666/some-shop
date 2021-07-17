import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchItems = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    })

    axios.get(`https://60e6c6ee15387c00173e4921.mockapi.io/items`)
        .then(({ data }) => {
            dispatch(setItems(data));
        })
}

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
})