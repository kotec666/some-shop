import React from 'react'

import s from './Card.module.css'
import {useDispatch, useSelector} from "react-redux"
import {removeItem} from "../../redux/actions/items"
import axios from "axios"


const Card = ({id, title, imageUrl, price}) => {

    const { role } = useSelector( state => state.role)
    const { items: cartItems}  = useSelector( state => state.cart)
    const dispatch = useDispatch()


    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    }



    const onRemoveFromDBASE = (id) => {
        dispatch(removeItem(id))
         try {
             ( async () => {
                 await axios.delete(`https://60e6c6ee15387c00173e4921.mockapi.io/items/${id}`)
            })()
         } catch (e) {
             alert('не удалить предмет из бд')
         }
    }

    return (
        <>
                <div className={s.card}>
                    {role ? <div className={s.removeItem} onClick={() => onRemoveFromDBASE(id, imageUrl, title, price)}>
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
                            isItemAdded(id)
                                ?
                            <div className={s.addedItem} onClick={() => console.log(id)} >
                                <span className={`${s.addItem} ${s.rtABO}`}></span>
                                <span className={`${s.addItem} ${s.rtABT}`}></span>
                            </div>
                                :
                            <div className={s.plusBtn} onClick={() => console.log(id)} >
                                <span className={`${s.removeSpan} ${s.removeSpanBottom} ${s.rtBO}`}></span>
                                <span className={`${s.removeSpan} ${s.removeSpanBottom}`}></span>
                            </div>
                        }



                    </div>
                </div>
    </>
    )
}

export default Card
