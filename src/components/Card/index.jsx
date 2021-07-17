import React, {useState} from 'react'

import s from './Card.module.css'
import {useSelector} from "react-redux"


const Card = ({id, title, imageUrl, price}) => {

    const { role } = useSelector( state => state.role)
    const { isAdded } = useSelector( state => state.cart)


    return (
        <>
                <div className={s.card}>
                    {role ? <div className={s.removeItem}>
                        <span className={`${s.removeSpan} ${s.removeSpanHeader} ${s.rtO}`}></span>
                        <span className={`${s.removeSpan} ${s.removeSpanHeader} ${s.rtT}`}></span>
                    </div> : null}
                    <div className={s.imgBlock}>
                        <img className={s.imgCard} src={imageUrl} alt="itemPhoto"/>
                    </div>
                    <div className={s.cardTitle}>
                        {title}
                    </div>
                    <div className={s.cardBottomInfo}>
                        <div className={s.price}>
                            <div className={s.priceTitle}>Цена:</div>
                            <div className={s.priceNumber}>{price} руб.</div>
                        </div>
                        {
                            !isAdded ? <div className={s.plusBtn} >
                                    <span className={`${s.removeSpan} ${s.removeSpanBottom} ${s.rtBO}`}></span>
                                    <span className={`${s.removeSpan} ${s.removeSpanBottom}`}></span>
                                </div> :
                                <div className={s.addedItem} >
                                    <span className={`${s.addItem} ${s.rtABO}`}></span>
                                    <span className={`${s.addItem} ${s.rtABT}`}></span>
                                </div>
                        }
                    </div>
                </div>
    </>
    )
}

export default Card
