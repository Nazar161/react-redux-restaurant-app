import React, { Component } from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import Error from '../error'
import {menuLoaded, menuRequested, menuErrored, addedToCart, changingTotal} from '../../actions';
import { Link } from 'react-router-dom';

import './item-page.css';
import Spinner from '../spinner';

class ItemPage extends Component {

    componentDidMount() {

        if(this.props.menuItems.length === 0) {
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => menuLoaded(res))
                .catch(this.props.menuErrored)
        }
    }

    render() {
        
        if(this.props.error) {
            return (
                <div className='item_page'>
                    <Error/>
                </div>
            )
        }

        if(this.props.loading) {
            return (
                <div className='item_page'>
                    <Spinner/>
                </div>
            )
        }

        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const {title, url, category, price, id} = item

        return(
            <>
                <div className = "item_page">
                    <div className="menu__item item_block">
                        <div className="menu__title">{title}</div>
                        <img className="menu__img" src={url} alt={title}></img>
                        <div className="menu__category">Category: <span>{category}</span></div>
                        <div className="menu__price">Price: <span>{price}$</span></div>
                        <button onClick={() => {this.props.addedToCart(id); this.props.changingTotal()}} className="menu__btn">Add to cart</button>
                        <Link to='/' className="menu__btn btn-back">Вернуться в меню</Link>
                        <span className = {`menu__category_Img ${category}`}></span> 
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        menuItems: store.infoReducer.menu,
        loading: store.infoReducer.loading,
        error: store.infoReducer.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuErrored,
    addedToCart,
    changingTotal
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));