const initialState = {
    items: [],
    isLoaded: false,
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

        case 'ADD_ITEM_TO_DBASE':
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case 'REMOVE_ITEM_FROM_DBASE': {
            return Object.assign({}, {isLoaded: true, items: state.items.filter(item => item.id !== action.id)})
        }

        default:
            return state
    }
}

export default items