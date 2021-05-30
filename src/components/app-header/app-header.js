import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';
import {connect} from 'react-redux';

const AppHeader = ({total}) => {
    return (
        <header className="header header-fixed">
            <Link to='/' className="header__link" style={{ textDecoration: 'none' }}>
                Menu
            </Link>
            <Link to='/cartpage' className="header__link" style={{ textDecoration: 'none' }}>
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                        Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({infoReducer: {total}}) => {
    return {
        total
    }
}
export default connect(mapStateToProps, )(AppHeader);