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
            dispatch(setItems(data))
        })
}

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
})


export const addItem = (obj) => ({
    type: 'ADD_ITEM_TO_DBASE',
    payload: obj
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM_FROM_DBASE',
    id
})

