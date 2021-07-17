import React from 'react'

import s from './Pagination.module.css'

const Pagination = () => {
    return (
        <div className={s.pWrapper}>
            <div className={s.currentPage}>Текущая страница 1 / 3</div>
            <div className={s.buttons}>
                <div className={`${s.leftBtn} ${s.btn}`}>←</div>
                <div className={`${s.rightBtn} ${s.btn}`}>→</div>
            </div>
        </div>
    )
}

export default Pagination
