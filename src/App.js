import React from 'react'
import Home from "./pages/Home"
import Header from "./components/Header"
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import { Route } from "react-router-dom"

const App = () => {
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
