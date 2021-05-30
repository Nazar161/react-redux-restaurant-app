import React from 'react';
import {Link} from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    return (
            <li className="menu__item">
                <Link to={`/${menuItem.id}`} className="menu__link">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                </Link>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            </li>        
    )
}

export default MenuListItem;