import { combineReducers } from 'redux'

import role from './role'
import items from './items'
import cart from './cart'


const rootReducer = combineReducers({
    role,
    items,
    cart,
})

export default rootReducer