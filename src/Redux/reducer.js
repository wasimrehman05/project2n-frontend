import {
    STORE_DATA,
    SHOW_ITEM,
    FILTER_DATA,
    ADD_TO_BAG,
    RELOAD_BAG,
    UPDATE_QUANTITY,
    DELETE_FROM_BAG,
    SET_USER,
    LAST,
    EMPTY_BAG,
} from "./action";

const initState = {
    products: [],
    item: [],
    filter: [],
    cartProducts: [],
    user: {},
    last: "/",
};

export const reducer = (store = initState, action) => {
    switch (action.type) {
        case STORE_DATA:
            return {
                ...store,
                products: action.payload,
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
                if (ele._id === action.payload.id) {
                    ele.quan = action.payload.val;
                }
            });

            return {
                ...store,
                cartProducts: updatedarr,
            };
        case DELETE_FROM_BAG:
            const updated_arr = store.cartProducts.filter((item) => {
                return item._id !== action.payload;
            });
            return {
                ...store,
                cartProducts: updated_arr,
            };
        case SET_USER:
            return {
                ...store,
                user: action.payload,
            };
        case LAST:
            return {
                ...store,
                last: action.payload,
            };
        case EMPTY_BAG:
            return {
                ...store,
                cartProducts: action.payload,
            };
        default:
            return store;
    }
};
