import React, { useEffect, useState } from "react";
import { Footer } from "../Home_Page/Footer";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { Sort, Filter } from "./Sort-Filter";
import { useDispatch, useSelector } from "react-redux";
import { Navbar2 } from "../navbarComp/Navbar2";
import "./Products.css";
import { SlideImg } from "./SlideImg";
import { getData } from "../../Redux/action";
// import { getCartData, getData } from "../../Redux/action";

const Div = styled.div`
    width: 78.1%;
    background-color: rgb(243, 243, 243);
    margin: auto;

    & > h2 {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    & > h2 > div {
        font-weight: 500;
    }
    & .dot {
        cursor: pointer;
        height: 12px;
        width: 12px;
        margin: 0 2px;
        background-color: rgb(245, 193, 213);
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }
    & .dot:active,
    & .dot:hover {
        background-color: rgb(250, 90, 152);
    }

    @media all and (max-width: 1500px) {
        width: 85%;
    }
    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 500px) {
        width: 100%;
    }
`;

const DivBtn = styled.div`
    bottom: 5px;
    display: block;
    width: 30%;
    margin: auto;
    margin-top: 20px;

    & > button {
        width: 15%;
        margin-right: 20px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        font-size: 20px;
        border: none;
    }

    @media all and (max-width: 500px) {
        width: 50%;
        margin-bottom: 20px;
        & > button {
            width: 20%;
        }
    }
`;

const P1 = styled.p`
    font-size: 1.7rem;
    margin-bottom: 3rem;
`;

const A = styled.a`
    text-decoration: none;
    color: rgb(250, 90, 152);
`;

export const ProductsPage = () => {
    const shop = "Shop Now >";
    let data;

    const [post, setPost] = useState(true);
    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);
    const [page, setPage] = useState(1);

    let dispatch = useDispatch();

    if (filter.length === 0) {
        data = products;
    } else {
        data = filter;
    }

    useEffect(() => {
        if (data.length > 0) {
            setPost(false);
        }
    });

    const Pagination = async (val) => {
        await setPost(true);
        await setPage(val);
        await dispatch(getData(val)).then(() => setPost(false));
    };
    // console.log(post);
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
                    <Div>
                        <h2>
                            Appliances <div>({data.length > 0 ? 26 : 0})</div>
                        </h2>
                        <section>
                            <SlideImg />
                        </section>
                        <section>
                            <div className="banner">
                                <div className="banner-info">
                                    <P1>The Must-Have Beauty Tools Guide</P1>
                                    <p>
                                        Beauty appliances are essential in every
                                        beauty wardrobe! Check out these beauty
                                        tools that simplify (and beautify) your
                                        life.
                                    </p>
                                    <A href="/">{shop}</A>
                                </div>
                                <div className="banner-img">
                                    <img
                                        src="https://www.nykaa.com/media/categoryInfo/art_banner_image/musthavebeautytoolscontentbanner.jpg"
                                        alt="ad-banner"
                                    />
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2>All Products</h2>
                            <div className="Content">
                                <div className="func">
                                    <Sort />
                                    <Filter />
                                </div>
                                <ProductCard />
                            </div>
                            <DivBtn className="pageBtn">
                                <button
                                    onClick={() => Pagination(1)}
                                    style={{
                                        color: `${
                                            page === 1 ? "white" : "black"
                                        }`,
                                        backgroundColor: `${
                                            page === 1
                                                ? "rgb(250,90,152)"
                                                : "white"
                                        }`,
                                    }}
                                >
                                    1
                                </button>
                                <button
                                    onClick={() => Pagination(2)}
                                    style={{
                                        color: `${
                                            page === 2 ? "white" : "black"
                                        }`,
                                        backgroundColor: `${
                                            page === 2
                                                ? "rgb(250,90,152)"
                                                : "white"
                                        }`,
                                    }}
                                >
                                    2
                                </button>
                                <button
                                    onClick={() => Pagination(3)}
                                    style={{
                                        color: `${
                                            page === 3 ? "white" : "black"
                                        }`,
                                        backgroundColor: `${
                                            page === 3
                                                ? "rgb(250,90,152)"
                                                : "white"
                                        }`,
                                    }}
                                >
                                    3
                                </button>
                            </DivBtn>
                        </section>
                    </Div>
                    <Footer />
                </>
            )}
        </>
    );
};
