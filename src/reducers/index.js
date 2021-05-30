const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0,
    postingDatas: null,
    name: '',
    tel: '',
    email: '',
    address: '',
}

const infoReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERRORED':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true,
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const a = state.items.find(item => item.id === id)

            const iteeem = state.menu.find(item => item.id === id)
            var firstPrice = iteeem.price;

            let newItem = {}
            if (a) {
                let {count} = a
                newItem = {...a, count: count + 1, price: +(count+1) * +firstPrice}
            } else {
                const item = state.menu.find(item => item.id === id)
                let count = 1;
                newItem = {
                    title: item.title,
                    url: item.url,
                    id: item.id,
                    count: count,
                    price: +count * +item.price,
                }   
            }

            const filterList = state.items.filter(item => item.id !== id)

            return {
                ...state,
                items: [
                    ...filterList,
                    // ...before,
                    // ...after,
                    // ...state.items,
                    newItem
                ]
            };
        case 'ITEM_REMOVE_FROM_CART':
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index)
            return{
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex+1)
                ]
            }  
        case 'CHANGE_TOTAL':
            let sum = 0;
            state.items.forEach(item => sum += +item.price)
            return {
                ...state,
                total: sum
            }
        case 'POST_ORDERS':
            const order = {
                id_order: Math.floor(Math.random() * 77777777),
                total: +state.total,
                items: state.items
            }
            return {
                ...state,
                postingDatas: order
            }
        case 'NAME_INPUT':
            return {
                ...state,
                name: action.payload
            }
        case 'TEL_INPUT':
            return {
                ...state,
                tel: action.payload
            }
        case 'EMAIL_INPUT':
            return {
                ...state,
                email: action.payload
            }
        case 'ADDRESS_INPUT':
            return {
                ...state,
                address: action.payload
            }        
        default:
            return state;    
    }
}

export default infoReducer;
