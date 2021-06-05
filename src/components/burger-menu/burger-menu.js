import React from 'react';
import './burger-menu.scss';
import {connect} from 'react-redux';
import {burgerToggled} from '../../actions';

const BurgerMenu = ({burgerMenuToggled, burgerToggled}) => {
    return (
        <div className={burgerMenuToggled ? 'menu active' : 'menu'} onClick={()=>burgerToggled()}>
            <div className='menu__content' onClick={e =>e.stopPropagation()}>
                <div className='menu__header'> 
                    <span>Бургер меню</span>
                </div>
                <div className='menu__items'>
                    <ul>
                        <div>
                            <li>Text text text</li>
                        </div>
                        <div>
                            <li>Text text text</li>
                        </div>
                        <div>
                            <li>Text text text</li>
                        </div>
                        <div>
                            <li>aText text text</li>
                        </div>
                        {/* <li>что-то</li>
                        <li>что-то</li>
                        <li>что-то</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({infoReducer: {burgerMenuToggled}}) => {
    return {
        burgerMenuToggled,
    }
}

const mapDispatchToProps = {
    burgerToggled
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);