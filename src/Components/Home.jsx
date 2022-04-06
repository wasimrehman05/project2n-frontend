import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeProducts } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [allData, setAllData] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        axios
            .get("http://localhost:3005/data")
            .then((res) => setAllData(res.data));
    };

    const showProducts = () => {
        dispatch(storeProducts(allData));
        navigate("/Appliances");
    };
    return (
        <div>
            <button onClick={showProducts}>SHOW DATA</button>
        </div>
    );
};
