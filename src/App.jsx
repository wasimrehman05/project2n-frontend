import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsPage } from "./Components/ProductsPage";
import { Item } from "./Components/Item";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route>
            </Routes>
        </div>
    );
}

export default App;
