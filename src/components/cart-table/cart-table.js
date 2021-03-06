import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux'
import {deleteFromCart, changingTotal, postingOrders} from '../../actions'
import WithRestoService from '../hoc'
import { Link } from 'react-router-dom';

const CartTable = ({items, deleteFromCart, changingTotal, postingOrders}) => {

    if(items.length === 0) {
        return (
            <>
                <div className="cart__title">В корзине нет товаров</div>
                <Link to='/' className="cart__btn-pay back-to-menu">Вернуться в меню</Link>
            </>
        )
    }
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__div-links">
                <Link to='/' className="cart__btn-pay back-to-menu">Вернуться в меню</Link>
                <Link to="/checkoutpage" onClick={postingOrders}  className="cart__btn-pay">Оформить заказ</Link>
            </div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price"><span>{price}$</span><span className="cart__item-quantity">{count}pcs.</span></div>
                                <div onClick={() => {deleteFromCart(id); changingTotal()}} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );

};


const mapStateToProps = ({infoReducer: {items, postingDatas}}) => {
    return{
        items,
        postingDatas,
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    changingTotal,
    postingOrders,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));