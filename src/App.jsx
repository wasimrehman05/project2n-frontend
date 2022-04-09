import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsPage } from "./Components/ProductsPage";
import { Item } from "./Components/Item";
import Login from "./Components/CheckOut/Login";
import Address from "./Components/CheckOut/AddressCheckout";
import Payment from "./Components/CheckOut/Payment";
import ThankYou from "./Components/ThankYou";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
                <Route path={"/checkout"} element={<Login />}></Route>
                <Route path={"/address"} element={<Address />}></Route>
                <Route path={"/payment"} element={<Payment />}></Route>
                <Route path={"/thankyou"} element={<ThankYou />}></Route>
            </Routes>
        </div>
    );
}

export default App;
