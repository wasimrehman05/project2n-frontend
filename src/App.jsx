import "./App.css";
import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { ProductsPage } from "./Components/ProductsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
