import React from 'react'

import s from "./Content.module.css"
import Card from "../../components/Card"
import Pagination from "../../components/Pagination"
import AddItemToBase from "../../components/AddItemToBase"
import {useSelector, useDispatch} from "react-redux"
import {fetchItems} from "../../redux/actions/items"
import Loader from "../../components/Loader";


const Home = () => {
    const dispatch = useDispatch()
    const { role } = useSelector( state => state.role)
    const { items } = useSelector( state => state.items)

    const {isLoaded} = useSelector( state => state.items)


    React.useEffect(() => {
        dispatch(fetchItems())
    }, [])

    return (
        <div>
            <div className={s.contentWrapper}>
                <h1>Все товары</h1>
                <div className={s.cardWrapper}>
                    { role ? <AddItemToBase/> : null}
                    {isLoaded
                        ? items.map((obj) => (<Card key={obj.id} {...obj} />))
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <Loader key={index} />)}
                </div>
                <div className={s.content}>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Home
