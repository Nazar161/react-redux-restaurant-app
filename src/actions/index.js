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

const nameInput = (value) => {
    return {
        type: 'NAME_INPUT',
        payload: value
    }
}
const telInput = (value) => {
    return {
        type: 'TEL_INPUT',
        payload: value
    }
}
const emailInput = (value) => {
    return {
        type: 'EMAIL_INPUT',
        payload: value
    }
}

const addressInput = (value) => {
    return {
        type: 'ADDRESS_INPUT',
        payload: value
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
    nameInput,
    telInput,
    emailInput,
    addressInput
};