// import "./Home.css";
import "./Home.css";
import { useState, useEffect } from "react";
// import {Carousels} from "./Carousels";
import { Footer } from "./Footer";
import { Navbar2 } from "../navbarComp/Navbar2";

export const Home = () => {
    const baseUrl = "http://localhost:3005/";
    const trending = `${baseUrl}trendingStores`;

    const [topbrands, setTopbrands] = useState([]);
    const [OnlyatNykaa, setOnlyatNykaa] = useState([]);
    const [TrendingStores, setTrendingStores] = useState([]);
    const [FeaturedBrands, setFeaturedBrands] = useState([]);
    const [BudgetBuys, setBudgetBuys] = useState([]);
    const [HiddenGems, setHiddenGems] = useState([]);
    const [EditorsChoice, setEditorsChoice] = useState([]);

    useEffect(() => {
        getTopbrands();
        getOnlyatNykaa();
        getTrendingStores();
        getFeaturedBrands();
        getBudgetBuys();
        getHiddenGems();
        getEditorsChoice();
    }, []);

    const getTopbrands = () => {
        fetch("http://localhost:3005/topbrands")
            .then((res) => (res = res.json()))
            .then((res) => setTopbrands(res));
    };

    const getOnlyatNykaa = () => {
        fetch("http://localhost:3005/onlyAtNykaa")
            .then((res) => (res = res.json()))
            .then((res) => setOnlyatNykaa(res));
    };

    const getTrendingStores = () => {
        fetch(trending)
            .then((res) => (res = res.json()))
            .then((res) => setTrendingStores(res));
    };

    const getFeaturedBrands = () => {
        fetch("http://localhost:3005/featuredBrands")
            .then((res) => (res = res.json()))
            .then((res) => setFeaturedBrands(res));
    };

    const getBudgetBuys = () => {
        fetch(" http://localhost:3005/budgetBuys")
            .then((res) => (res = res.json()))
            .then((res) => setBudgetBuys(res));
    };

    const getHiddenGems = () => {
        fetch("http://localhost:3005/hiddenGems")
            .then((res) => (res = res.json()))
            .then((res) => setHiddenGems(res));
    };

    const getEditorsChoice = () => {
        fetch("http://localhost:3005/editorsChoice")
            .then((res) => (res = res.json()))
            .then((res) => setEditorsChoice(res));
    };

    return (
        <>
            <Navbar2 />
            <div>
                {/* <Navbar /> */}
                <div className="home-container">
                    {/* <Carousels /> */}
                    {/* <div>
                        <img
                            src="https://images-static.nykaa.com/uploads/db9f968e-665c-4633-8bdd-8906a97a7f6a.jpg?tr=w-1200,cm-pad_resize"
                            alt=""
                        />
                    </div> */}
                    <h1 className="home-heading">Top Brands</h1>
                    <div className="top-brands">
                        {topbrands.map((item) => (
                            <div>
                                <div>
                                    <div className="card-block">
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                                width: "100%",
                                                height: "300px",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "700px 400px",
                                                borderRadius: "5px",
                                                display: "block",
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="offer-desc"
                                        style={{
                                            marginTop: "-80px",
                                            backgroundColor: "white",
                                            width: "95%",
                                            height: "80px",
                                            marginLeft: "17px",
                                            borderRadius: "5px",
                                            paddingTop: "0.5%",
                                        }}
                                    >
                                        <p
                                            style={{
                                                // marginTop: "-rem",
                                                color: "#fc2779",
                                                fontSize: "22px",
                                                // marginTop: "1rem",
                                            }}
                                        >
                                            {item.desc1}
                                        </p>
                                        <p>{item.desc2}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="home-heading">Only At Nykaa</h1>
                    <div className="only-at-nykaa">
                        {OnlyatNykaa.map((item) => (
                            <div>
                                <div className="card-block">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            width: "100%",
                                            height: "300px",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "700px 400px",
                                            borderRadius: "5px",
                                            display: "block",
                                        }}
                                    >
                                        {/* <img src={item.img} alt="" /> */}
                                    </div>
                                </div>
                                <div
                                    className="offer-desc"
                                    style={{
                                        marginTop: "-80px",
                                        backgroundColor: "white",
                                        width: "95%",
                                        height: "80px",
                                        marginLeft: "17px",
                                        borderRadius: "5px",
                                        paddingTop: "0.5%",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "#fc2779",
                                            fontSize: "22px",
                                        }}
                                    >
                                        {item.desc1}
                                    </p>
                                    <p>{item.desc2}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="home-heading">Trending Store and Offers</h1>
                    <div className="trending-store">
                        {TrendingStores.map((item) => (
                            <div>
                                <div
                                    style={{ display: "block" }}
                                    className="card-block"
                                >
                                    <img src={item.img} alt={item.desc1} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="home-heading">Featured Brands</h1>
                    <div
                        className="featured-brands"
                        style={{ marginBottom: "60px" }}
                    >
                        {FeaturedBrands.map((item) => (
                            <div>
                                <div className="card-block">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            width: "100%",
                                            height: "300px",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "700px 400px",
                                            borderRadius: "5px",
                                            display: "block",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="offer-desc"
                                    style={{
                                        marginTop: "-80px",
                                        backgroundColor: "white",
                                        width: "100%",
                                        height: "80px",
                                        lineHeight: "0.5em",
                                        borderRadius: "5px",
                                        paddingTop: "0.1px",
                                    }}
                                >
                                    <a
                                        href=""
                                        style={{ textDecoration: "none" }}
                                    >
                                        <p
                                            style={{
                                                color: "#fc2779",
                                                fontSize: "17px",
                                            }}
                                        >
                                            {item.desc1}
                                        </p>

                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "black",
                                                lineHeight: "1.5em",
                                            }}
                                        >
                                            {item.desc2}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
