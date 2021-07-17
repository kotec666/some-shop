import React from 'react'
import styles from './../AddItemToBase/AddItemToBase.module.css'

const AddItemToBase = ({onClose}) => {
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
                    <h5>Ссылка на изображение товара:  <input className={styles.iO} type="text"/></h5>
                    <h5>Имя товара: <input className={styles.iT} type="text"/></h5>
                    <h5>ID???:  <input className={styles.iTh} type="text"/></h5>
                    <h5>Цена: <input className={styles.iTh} type="text"/></h5>
                </div>
                <div className={styles.popUpBottom}>
                    Добавить
                </div>
            </div>
        </>
    )
}

export default AddItemToBase
