import {
    STORE_PRODUCTS,
    SHOW_ITEM,
    FILTER_DATA,
    ADD_TO_BAG,
    RELOAD_BAG,
    UPDATE_QUANTITY,
    DELETE_FROM_BAG,
    SET_USER,
} from "./action";

const initState = {
    products: [], item: [], filter: [], cartProducts: [], user: {
        id: '',
        address: '',
        payment: false,
        paymentType: '',
        amount: '',
    }
};

export const reducer = (store = initState, action) => {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {
                ...store,
                products: action.payload.products,
            };
        case SHOW_ITEM:
            return {
                ...store,
                item: action.payload,
            };
        case FILTER_DATA:
            return {
                ...store,
                filter: action.payload,
            };
        case ADD_TO_BAG:
            return {
                ...store,
                cartProducts: [...store.cartProducts, action.payload],
            };
        case RELOAD_BAG:
            return {
                ...store,
                cartProducts: action.payload,
            };
        case UPDATE_QUANTITY:
            let updatedarr = [...store.cartProducts];

            updatedarr.map((ele) => {
                if (ele.id === action.payload.id) {
                    ele.quan = action.payload.val;
                }
            });

            return {
                ...store,
                cartProducts: updatedarr,
            };
        case DELETE_FROM_BAG:
            const updated_arr = store.cartProducts.filter((item) => {
                return item.id !== action.payload;
            });
            return {
                ...store,
                cartProducts: updated_arr,
            };
        case SET_USER:
            return {
                ...store,
                user: { ...store.user, ...action.payload },
            };
        default:
            return store;
    }
};