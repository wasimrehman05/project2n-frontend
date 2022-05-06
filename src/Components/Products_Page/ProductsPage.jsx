import React from "react";
import { Footer } from "../Home_Page/Footer";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { Sort, Filter } from "./Sort-Filter";
import { useSelector } from "react-redux";
import { Navbar2 } from "../navbarComp/Navbar2";
import "./Products.css";
import { SlideImg } from "./SlideImg";
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

    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);

    if (filter.length === 0) {
        data = products;
    } else {
        data = filter;
    }

    return (
        <>
            <Navbar2 />
            <Div>
                <h2>
                    Appliances <div>({data.length})</div>
                </h2>
                <section>
                    <SlideImg />
                </section>
                <section>
                    <div className="banner">
                        <div className="banner-info">
                            <P1>The Must-Have Beauty Tools Guide</P1>
                            <p>
                                Beauty appliances are essential in every beauty
                                wardrobe! Check out these beauty tools that
                                simplify (and beautify) your life.
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
                </section>
            </Div>
            <Footer />
        </>
    );
};
