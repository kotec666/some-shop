const initialState = {
    role: false,
    window: false
}

const role = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROLE':
            return {
                ...state,
                role: action.payload
            }
        case 'SET_WINDOW':
            return {
                ...state,
                window: action.payload
            }
        default:
            return state
    }
}



export default role