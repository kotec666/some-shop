import React from 'react'
import Home from "./pages/Home"
import Header from "./components/Header"
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import { Route } from "react-router-dom"
import {fetchItems} from "./redux/actions/items"
import {useDispatch, useSelector} from "react-redux"
import {fetchCartItems} from "./redux/actions/cart";
// import {isItemAdded} from "./redux/actions/items"

const App = () => {

    const dispatch = useDispatch()

    const { items } = useSelector( state => state.items)
    const { items: cartItems}  = useSelector( state => state.cart)



    React.useEffect(() => {
        dispatch(fetchItems())
        dispatch(fetchCartItems())
    }, [])


  return (
    <div className="App">
        <Header />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/cart"><Cart /></Route>
        <Route exact path="/purchases"><Purchases /></Route>
    </div>
  )
}

export default App
