import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

const Header = () => {

    const dispatch = useDispatch()
    const { role } = useSelector( state => state.role)


    const onSetRole = () => {
        dispatch({
            type: 'SET_ROLE',
            payload: !role
       })
    }



    return (
        <header>
            <div className={s.headerWrapper}>
                  <NavLink to="/" className={s.headerContentWrapper}>
                       <div className={s.logo}>
                            <div className={s.logoItem}>
                                ?
                            </div>
                       </div>
                      <div className={s.headerText}>
                          <div className={s.logoName}>
                              SOME SHOP
                          </div>
                          <div className={s.logoDesc}>
                              Магазин лучших товаров
                          </div>
                      </div>
                  </NavLink>
                <div className={s.navigation}>
                      <div className={s.navItem} onClick={onSetRole}>
                          Роль: {role ? 'Администратор' : 'Пользователь'}
                      </div>
                      <NavLink activeClassName={s.activeNav} to="/cart" className={s.navItem}>
                          Корзина: 1205 руб.
                      </NavLink>
                      <NavLink activeClassName={s.activeNav} to="/purchases" className={s.navItem}>
                          Покупки
                      </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header
