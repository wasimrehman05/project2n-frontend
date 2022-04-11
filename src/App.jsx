import "./App.css";
import React, { useEffect } from "react";
// import { Footer } from "./Components/Home_Page/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home_Page/Home";
import { ProductsPage } from "./Components/Products_Page/ProductsPage";
import { Item } from "./Components/One_Item_Page/Item";
// import { Cart } from "./Components/Cart";
import { useDispatch } from "react-redux";
import { getCartData, getData, showItem } from "./Redux/action";
import { Checkout } from "./Components/Checkout/Checkout";
// import { Navbar2 } from "./Components/navbarComp/Navbar2";

function App() {
    // const [allData, setAllData] = useState({});

    const dispatch = useDispatch();

    // const ReRendering = () => {
    useEffect(() => {
        dispatch(getData());
        dispatch(getCartData());
        dispatch(showItem());
    }, []);

    // dispatch();
    // console.log(products);
    // dispatch(storeProducts(allData));
    // };

    // ReRendering();
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
                <Route path={"/checkout"} element={<Checkout />}></Route>
            </Routes>
        </div>
    );
}

export default App;
