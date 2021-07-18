import React, {useState} from 'react'
import styles from './../AddItemToBase/AddItemToBase.module.css'
import {useDispatch, useSelector} from "react-redux"
import {addItem} from "../../redux/actions/items"
import axios from "axios"

const AddItemToBase = ({onClose}) => {
    const { items } = useSelector( state => state.items)
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()

    const obj = ({ id: items.length + 1, imageUrl, title, price})


   const onClickAdd = () => {
       dispatch(addItem(obj))
       onClose()
       try {
           ( async () => {
               await axios.post(`https://60e6c6ee15387c00173e4921.mockapi.io/items`, obj)
           })()
       } catch (e) {
           alert('не удалось добавить предмет в базу данных')
       }
    }

    return (
        <>
            <div className={styles.addPopUp}>
                <div className={styles.popUpHeader}>
                    <h4>Добавление товара</h4>
                    <div className={styles.removePopUp} onClick={onClose}>
                        <span className={styles.spanRemoveOne} />
                        <span className={styles.spanRemoveTwo} />
                    </div>
                </div>
                <div className={styles.popUpCenter}>
                    <h5>Ссылка на изображение товара:  <input onChange={(e) => setImageUrl(e.target.value)} className={styles.iO} type="text" defaultValue={imageUrl} /></h5>
                    <h5>Имя товара: <input onChange={(e) => setTitle(e.target.value)} className={styles.iT} type="text" defaultValue={title} /></h5>
                    <h5>Цена: <input onChange={(e) => setPrice(parseInt(e.target.value))} className={styles.iTh} type="number" defaultValue={price} /></h5>
                </div>
                <div onClick={onClickAdd} className={styles.popUpBottom}>
                    Добавить
                </div>
            </div>
        </>
    )
}

export default AddItemToBase
