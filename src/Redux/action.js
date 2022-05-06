import axios from "axios";
import { API_KEY } from "../config";
export const STORE_DATA = "STORE_DATA";
export const SHOW_ITEM = "SHOW_ITEM";
export const FILTER_DATA = "FILTER_DATA";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const RELOAD_BAG = "RELOAD_BAG";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const DELETE_FROM_BAG = "DELETE_FROM_BAG";
export const SET_USER = "SET_USER";
export const LAST = "LAST";
export const EMPTY_BAG = "EMPTY_BAG";

export const storeData = (payload) => ({
    type: STORE_DATA,
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

export const last = (payload) => ({
    type: LAST,
    payload,
});

export const empty_bag = (payload) => ({
    type: EMPTY_BAG,
    payload,
});

export const getData = () => (dispatch) => {
    axios
        .get(`${API_KEY}/products`)
        .then((res) => dispatch(storeData(res.data)));
};

export const getCartData = () => (dispatch) => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));
    axios.post(`${API_KEY}/cartproducts`, { id: loginData._id }).then((res) => {
        dispatch(reloadBag(res.data));
    });
};
