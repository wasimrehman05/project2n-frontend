import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home_Page/Home";
import { ProductsPage } from "./Components/Products_Page/ProductsPage";
import { Item } from "./Components/One_Item_Page/Item";
import { useDispatch } from "react-redux";
import { getCartData, getData, showItem } from "./Redux/action";
import { Checkout } from "./Components/Checkout/Checkout";
import { ThankYou } from "./Components/ThankYou";
import { Login } from "./Components/Login/Login";
import { LoginCheck } from "./Components/Login/LoginCheck";
import { Register } from "./Components/Login/Register";
import { Myprofile } from "./Components/Home_Page/Myprofile";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
        dispatch(getCartData());
        dispatch(showItem());
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
                <Route path={"/checkout"} element={<Checkout />}></Route>
                <Route path={"/thankyou"} element={<ThankYou />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/verify"} element={<LoginCheck />}></Route>
                <Route path={"/register"} element={<Register />}></Route>
                <Route path={"/myProfile"} element={<Myprofile />}></Route>
            </Routes>
        </div>
    );
}

export default App;
