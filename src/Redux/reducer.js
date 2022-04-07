import {
    STORE_PRODUCTS,
    SHOW_ITEM,
    FILTER_DATA,
    ADD_TO_BAG,
    RELOAD_BAG,
} from "./action";

export const reducer = (
    store = { products: [], item: [], filter: [], cartProducts: [] },
    action
) => {
    switch (action.type) {
        default:
            return store;
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
    }
};
