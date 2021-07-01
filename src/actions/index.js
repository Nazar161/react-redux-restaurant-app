const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};

const menuErrored = () => {
    return {
        type: 'MENU_ERRORED',
    };
};

const changingTotal = () => {
    return {
        type: 'CHANGE_TOTAL'
    }
}

const postingOrders = () => {
    return {
        type: 'POST_ORDERS',
    }
}

const addingOrderInfo = (formInfo) => {
    return {
        type: 'ADD_ORDER_INFO',
        payload: formInfo
    }
}

const addingBankResponse = (bankResponse) => {
    return {
        type: 'BANK_RESPONSE',
        payload: bankResponse
    }
} 

const burgerToggled = () => {
    return {
        type: 'BURGER_TOGGLED'
    }
}

export {
    menuLoaded, 
    menuRequested, 
    menuErrored, 
    addedToCart, 
    deleteFromCart, 
    changingTotal, 
    postingOrders,
    burgerToggled,
    addingOrderInfo,
    addingBankResponse
};