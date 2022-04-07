import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsPage } from "./Components/ProductsPage";
import { Item } from "./Components/Item";
import Login from "./Components/CheckOut/Login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
                <Route path={"/checkout"} element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
