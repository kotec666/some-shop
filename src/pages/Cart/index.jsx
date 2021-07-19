import React from 'react'

import s from "./Content.module.css"
import Card from "../../components/Card"
import {useSelector} from "react-redux"
import Loader from "../../components/Loader";



const Cart = () => {
    const { items: cartItems}  = useSelector( state => state.cart)
    const {isLoaded} = useSelector( state => state.cart)



    return (
        <div>
            <div className={s.contentWrapper}>
                <h1>Корзина</h1>
                <div className={s.cardWrapper}>
                    {isLoaded
                        ? cartItems.map((obj) => (<Card key={obj.id} {...obj} />))
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <Loader key={index} />)}
                </div>
                <div className={s.content}>
                    <button className={s.buyBtn}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
