import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    height: 3.25rem;
    background-color: #ffffff;
    border-radius: 3px;
    margin-top: 2px;

    & > div:nth-child(1) {
        display: Flex;
        justify-content: space-between;
        vertical-align: center;
        height: 3.25rem;
    }

    & h3 {
        margin: auto 1rem;
        font-weight: 500;
        font-size: 17px;
        color: black;
    }

    & img {
        width: 2rem;
        height: 2rem;
        margin: auto 0.5rem;
    }

    // & ~ div {
    //     height: fit-content;
    //     max-height: 15rem;
    //     overflow: hidden;
    // }
`;

export const Collapisble = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Div>
                <div>
                    <h3>{props.name}</h3>
                    {toggle ? (
                        <img
                            style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                margin: "auto 0.7rem",
                            }}
                            src="https://cdn2.iconfinder.com/data/icons/simple-microphone-icon/512/Cancel_Icon-256.png"
                            alt="cross-arrow"
                            onClick={() => setToggle(!toggle)}
                        />
                    ) : (
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/arrow_down2-128.png"
                            alt="down-arrow"
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                </div>
            </Div>
            {toggle && <div>{props.children}</div>}
        </>
    );
};

const Div2 = styled.div`
    width: 92%;
    height: 3.25rem;
    background-color: #ffffff;
    border-radius: 3px;
    padding-left: 8%;

    & > div:nth-child(1) {
        display: Flex;
        justify-content: space-between;
        vertical-align: center;
        height: 3.25rem;
    }

    & h3 {
        margin: auto 1rem;
        font-weight: 500;
        font-size: 17px;
    }

    & img {
        width: 2rem;
        height: 2rem;
        margin: auto 0.5rem;
    }
`;
//
export const Collapisble2 = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <Div2>
                <div>
                    <h3
                        style={{
                            color: `${toggle ? "rgb(250, 90, 152)" : "black"}`,
                        }}
                    >
                        {props.name}
                    </h3>
                    {toggle ? (
                        <img
                            style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                margin: "auto 0.6rem",
                            }}
                            src="https://cdn2.iconfinder.com/data/icons/simple-microphone-icon/512/Cancel_Icon-256.png"
                            alt="cross-arrow"
                            onClick={() => setToggle(!toggle)}
                        />
                    ) : (
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/arrow_down2-128.png"
                            alt="down-arrow"
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                </div>
            </Div2>
            {toggle && <div>{props.children}</div>}
        </>
    );
};
