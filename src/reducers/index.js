const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0,
    postingDatas: null,
    bankResponse: false,
    burgerMenuToggled: false,
    search: '',
    activeMenu: []
}

const infoReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            // const filteredList = action.payload.filter(item => item.title.toLowerCase().includes(state.search.toLowerCase()))
            return {
                ...state,
                menu: action.payload,
                activeMenu: action.payload,
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
        case 'ADD_ORDER_INFO':
            return {
                ...state,
                postingDatas: {...action.payload, ...state.postingDatas}
            }
        case 'BANK_RESPONSE':
            return{
                ...state,
                bankResponse: action.payload,
                postingDatas: {...state.postingDatas, ...action.payload}
            }
        case'BURGER_TOGGLED':
            return {
                ...state,
                burgerMenuToggled: !state.burgerMenuToggled
            }
        case 'SEARCH_ITEM':
            return {
                ...state,
                search: action.payload,
            }
        case 'SHOWING_SEARCH_ITEM':
            return {
                ...state,
                activeMenu: state.menu.filter(item => item.title.toLowerCase().includes(state.search.toLowerCase()))
            }
        case 'SELECTED_SERACH_ITEM':
            return {
                ...state,
                search: state.activeMenu.filter(item => item.id === action.payload)[0].title,
                activeMenu: state.activeMenu.filter(item => item.id === action.payload)
            }
        default:
            return state;    
    }
}

export default infoReducer;

