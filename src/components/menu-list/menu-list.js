import React, {useEffect} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuErrored, addedToCart, changingTotal} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

// class MenuList extends Component {
const MenuList = ({menuItems, loading, error, addedToCart, changingTotal, RestoService, menuRequested, menuLoaded, menuErrored}) => {

    // componentDidMount() {
    //     this.props.menuRequested();

    //     const {RestoService} = this.props;
    //     RestoService.getMenuItems()
    //         .then(res => this.props.menuLoaded(res))
    //         .catch(this.props.menuErrored)
    // }
    useEffect(() => {
        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(menuErrored)
    },[])
    

    // render() {
        // const {menuItems, loading, error, addedToCart, changingTotal} = this.props;

        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <Error/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                            key={menuItem.id} 
                            menuItem={menuItem}
                            onAddToCart={() => {addedToCart(menuItem.id); changingTotal()}}/>
                    })
                }
            </ul>
        )
    // }
};

const mapStateToProps = (store) => {
    return {
        menuItems: store.infoReducer.activeMenu,
        loading: store.infoReducer.loading,
        error: store.infoReducer.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuErrored,
    addedToCart,
    changingTotal,
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));