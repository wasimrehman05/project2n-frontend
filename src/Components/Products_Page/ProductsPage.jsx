import React, { useState } from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { Sort, Filter } from "./Sort-Filter";
import { useSelector } from "react-redux";
import "./Products.css";

const Div = styled.div`
    width: 78.1%;
    background-color: rgb(243, 243, 243);
    margin: auto;
    margin-top: 15vh;

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
    const imgForSlide = [
        "https://images-static.nykaa.com/uploads/955c1246-e324-42a0-af8d-291fa64f0d31.jpeg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/471922f1-d135-45b3-9df2-6ee3a72023d5.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/5ee8ed07-ecf3-4e7c-9af7-ff14f5ec35da.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/6f1f4edb-0aeb-466f-9f9f-bc9521c72d07.jpg?tr=w-1200,cm-pad_resize",
    ];

    const [slideImgIndex, setSlideImgIndex] = useState(0);

    let data;

    const products = useSelector((state) => state.products);

    const filter = useSelector((state) => state.filter);

    if (filter.length === 0) {
        data = products;
    } else {
        data = filter;
    }

    const slideImg = (val) => {
        let index = slideImgIndex + val;

        if (index === -1) {
            index = 3;
        }
        if (index === 4) {
            index = 0;
        }

        setSlideImgIndex(index);
    };

    return (
        <Div>
            <h2>
                Appliances <div>({data.length})</div>
            </h2>
            <section>
                <div className="carousel">
                    <div className="pre-next">
                        <button
                            onClick={() => slideImg(-1)}
                            className="carousel__button previous"
                        >
                            ❮
                        </button>
                    </div>
                    <a className="carousel__images" href="/">
                        <img src={imgForSlide[slideImgIndex]} alt="slide-img" />
                    </a>
                    <button
                        onClick={() => slideImg(1)}
                        className="carousel__button next"
                    >
                        ❯
                    </button>
                </div>

                <div id="main-sliding-dot">
                    <span
                        onClick={() => setSlideImgIndex(0)}
                        className="dot"
                    ></span>
                    <span
                        onClick={() => setSlideImgIndex(1)}
                        className="dot"
                    ></span>
                    <span
                        onClick={() => setSlideImgIndex(2)}
                        className="dot"
                    ></span>
                    <span
                        onClick={() => setSlideImgIndex(3)}
                        className="dot"
                    ></span>
                </div>
            </section>
            <section>
                <div className="banner">
                    <div className="banner-info">
                        <P1>The Must-Have Beauty Tools Guide</P1>
                        <p>
                            Beauty appliances are essential in every beauty
                            wardrobe! Check out these beauty tools that simplify
                            (and beautify) your life.
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
    );
};
