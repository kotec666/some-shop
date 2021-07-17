import { combineReducers } from 'redux'

import role from './role'
import items from './items'


const rootReducer = combineReducers({
    role,
    items,
    // cart,
})

export default rootReducer