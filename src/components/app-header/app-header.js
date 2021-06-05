import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';
import {connect} from 'react-redux';
import burgerIcon from './burger.svg';
import {burgerToggled} from '../../actions';

const AppHeader = ({total, burgerToggled}) => {
    return (
        <header className="header header-fixed">
            <div className="header__burger" onClick={() => burgerToggled()}>
                <img src={burgerIcon} alt="burger"></img>
            </div>
            <div className="parent-link">
                <Link to='/' className="header__link" style={{ textDecoration: 'none' }}>
                    Menu
                </Link>
                <Link to='/cartpage' className="header__link" style={{ textDecoration: 'none' }}>
                        <img className="header__cart" src={cartIcon} alt="cart"></img>
                            Total: {total} $
                </Link>
            </div>
        </header>
    )
};

const mapStateToProps = ({infoReducer: {total}}) => {
    return {
        total
    }
}

const mapDispatchToProps = {
    burgerToggled
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);