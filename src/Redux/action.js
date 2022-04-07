export const STORE_PRODUCTS = "STORE_PRODUCTS";
export const SHOW_ITEM = "SHOW_ITEM";
export const FILTER_DATA = "FILTER_DATA";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const RELOAD_BAG = "RELOAD_BAG";

export const storeProducts = (payload) => ({
    type: STORE_PRODUCTS,
    payload,
});
export const showItem = (payload) => ({
    type: SHOW_ITEM,
    payload,
});
export const filterData = (payload) => ({
    type: FILTER_DATA,
    payload,
});
export const addingToBag = (payload) => ({
    type: ADD_TO_BAG,
    payload,
});
export const reloadBag = (payload) => ({
    type: RELOAD_BAG,
    payload,
});
