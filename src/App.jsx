import "./App.css";
import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsPage } from "./Components/ProductsPage";
import { Item } from "./Components/Item";
// import { Cart } from "./Components/Cart";
import { useDispatch } from "react-redux";
import { getCartData, getData } from "./Redux/action";
import { TempNav } from "./Components/TempNav";

function App() {
    // const [allData, setAllData] = useState({});

    const dispatch = useDispatch();

    // const ReRendering = () => {
    useEffect(() => {
        dispatch(getData());
        dispatch(getCartData());
    }, []);

    // dispatch();
    // console.log(products);
    // dispatch(storeProducts(allData));
    // };

    // ReRendering();
    return (
        <div className="App">
            <TempNav />
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
            </Routes>
        </div>
    );
}

export default App;
