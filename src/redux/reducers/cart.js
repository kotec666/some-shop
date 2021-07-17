const initialState = {
    items: [],
    isLoaded: false,

}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }

        case 'SET_CART_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state
    }
};

export default cart