const initialState = {
    items: [],
    isLoaded: false,
    isAdded: false
}


const items = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }

        case 'IS_ITEM_ADDED':
            return {
                ...state,
                isAdded: ''
            }

        default:
            return state
    }
};

export default items