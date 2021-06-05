import React from 'react';
import {MainPage, CartPage, ItemPage, CheckoutPage} from '../pages';
import AppHeader from '../app-header';
import BurgerMenu from '../burger-menu';
import {Route, Switch} from 'react-router-dom';



import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cartpage' exact component={CartPage}/>
                <Route path='/checkoutpage' exact component={CheckoutPage}/>
                <Route path = '/:id' exact component ={ItemPage}/>
            </Switch>
            <BurgerMenu/>
        </div>
    )
}

export default App;