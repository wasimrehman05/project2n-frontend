import React from "react";
import styled from "styled-components";

const Star = styled.span`
    display: inline-block;
    cursor: pointer;
    color: rgb(0, 0, 0);

    & > svg {
        margin-bottom: -3px;
        width: 10.5px;
    }
`;

const StarRatings = ({ count, value, size = 24 }) => {
    const stars = Array.from({ length: count }, () => "☆");

    return (
        <div>
            {stars.map((s, index) => {
                if (index + 1 <= value) {
                    s = "★";
                } else if (index + 1 > value && index < value) {
                    s = (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-half"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                        </svg>
                    );
                } else {
                    s = "☆";
                }
                return (
                    <Star
                        className={"star"}
                        key={index}
                        style={{
                            width: size,
                            height: size,
                            fontSize: size,
                        }}
                    >
                        {s}
                    </Star>
                );
            })}
        </div>
    );
};

export const StarRatingShow = (props) => {
    return (
        <>
            <StarRatings count={5} size={15} value={+props.value} />
        </>
    );
};
