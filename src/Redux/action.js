import axios from "axios";
export const STORE_PRODUCTS = "STORE_PRODUCTS";
export const SHOW_ITEM = "SHOW_ITEM";
export const FILTER_DATA = "FILTER_DATA";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const RELOAD_BAG = "RELOAD_BAG";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const DELETE_FROM_BAG = "DELETE_FROM_BAG";
export const SET_USER = "SET_USER";

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
export const updateQuan = (payload) => ({
    type: UPDATE_QUANTITY,
    payload,
});
export const deleteFromBag = (payload) => ({
    type: DELETE_FROM_BAG,
    payload,
});
export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

export const getData = () => (dispatch) => {
    axios
        .get("http://localhost:3005/data")
        .then((res) => dispatch(storeProducts(res.data)));
};
export const getCartData = () => (dispatch) => {
    axios
        .get("http://localhost:3005/cartProducts")
        .then((res) => {
            dispatch(reloadBag(res.data))
            dispatch(setUser({amount:res.data.reduce((a, b) => +a.off_price + +b.off_price)}))
        });
};
