import React from 'react'

import s from "./Content.module.css"
import Card from "../../components/Card"



const Home = () => {
    return (
        <div>
            <div className={s.contentWrapper}>
                <h1>Корзина</h1>
                <div className={s.cardWrapper}>
                    <Card/>
                </div>
                <div className={s.content}>
                    <button className={s.buyBtn}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Home
