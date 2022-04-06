import { STORE_PRODUCTS } from "./action";

export const reducer = (store = { products: [] }, action) => {
    switch (action.type) {
        default:
            return store;
        case STORE_PRODUCTS:
            return {
                ...store,
                products: action.payload.products,
            };
    }
};
