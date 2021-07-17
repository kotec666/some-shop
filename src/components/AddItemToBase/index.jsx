import React from 'react'
import styles from './AddItemToBase.module.css'
import s from './../Card/Card.module.css'
import AddPopUp from './../AddPopUp'
import {useDispatch, useSelector} from "react-redux"

const AddItemToBase = () => {

    const dispatch = useDispatch()
    const window = useSelector( state => state.role.window)

    const onClickPlus = () => {
        dispatch({
            type: 'SET_WINDOW',
            payload: !window
        })
    }

    return (
        <>
            <div className={s.card} onClick={onClickPlus}>
                <span className={`${styles.addItemSpan} ${styles.addO}`}></span>
                <span className={`${styles.addItemSpan} `}></span>
            </div>
            {window ? <AddPopUp onClose={onClickPlus} /> : null}
        </>
    )
}

export default AddItemToBase
