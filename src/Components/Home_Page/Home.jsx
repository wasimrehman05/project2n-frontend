import "./Home.css";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Navbar2 } from "../navbarComp/Navbar2";
import axios from "axios";
import { API_KEY } from "../../config";
import { Carousel } from "./Carousel";

export const Home = () => {
    const [post, setPost] = useState(true);
    const [topbrands, setTopbrands] = useState([]);
    const [OnlyatNykaa, setOnlyatNykaa] = useState([]);
    const [TrendingStores, setTrendingStores] = useState([]);
    const [FeaturedBrands, setFeaturedBrands] = useState([]);

    useEffect(() => {
        const getTopbrands = () => {
            axios
                .get(`${API_KEY}/topBrands`)
                .then((res) => setTopbrands(res.data));
        };

        const getOnlyatNykaa = () => {
            axios
                .get(`${API_KEY}/OnlyAtNykaa`)
                .then((res) => setOnlyatNykaa(res.data));
        };

        const getTrendingStores = () => {
            axios
                .get(`${API_KEY}/trendingStores`)
                .then((res) => setTrendingStores(res.data));
        };

        const getFeaturedBrands = () => {
            axios
                .get(`${API_KEY}/featuredBrands`)
                .then((res) => setFeaturedBrands(res.data))
                .then(() => setPost(false));
        };

        getTopbrands();
        getOnlyatNykaa();
        getTrendingStores();
        getFeaturedBrands();
    }, []);

    return (
        <>
            {post ? (
                <img
                    className="loader"
                    src="//images-static.nykaa.com/media/favicon/default/nykaa_favicon_a.png"
                    alt="Loading"
                />
            ) : (
                <>
                    <Navbar2 />
                    <Carousel />

                    <div className="home-container">
                        <h1 className="home-heading">Top Brands</h1>
                        <div className="top-brands">
                            {topbrands.map((item) => (
                                <div key={item._id}>
                                    <div>
                                        <div className="card-block">
                                            <div
                                                className="card-img"
                                                style={{
                                                    backgroundImage: `url(${item.img})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="offer-desc">
                                            <p>{item.desc1}</p>
                                            <p>{item.desc2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h1 className="home-heading">Only At Nykaa</h1>
                        <div className="only-at-nykaa">
                            {OnlyatNykaa.map((item) => (
                                <div key={item._id}>
                                    <div className="card-block">
                                        <div
                                            className="card-img"
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="offer-desc">
                                        <p>{item.desc1}</p>
                                        <p>{item.desc2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h1 className="home-heading">
                            Trending Store and Offers
                        </h1>
                        <div className="trending-store">
                            {TrendingStores.map((item) => (
                                <div key={item._id}>
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
                                <div key={item._id}>
                                    <div className="card-block card-f">
                                        <div
                                            className="card-img"
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="offer-desc">
                                        <p>{item.desc1}</p>

                                        <p className="p">{item.desc2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};
