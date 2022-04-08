import "./Item.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StarRatingShow } from "./StarRatings";
import photo from "./Capture.PNG";
import { useState } from "react";
import { addingToBag } from "../Redux/action";

export const Item = () => {
    const [change, setChange] = useState(false);
    const [desc, setDesc] = useState(true);
    const [cartstatus, setCartstatus] = useState(false);
    const [cartmessage, setCartmessage] = useState("ADDED TO BAG");

    const item = useSelector((store) => store.item);
    const cartProducts = useSelector((store) => store.cartProducts);

    const dispatch = useDispatch();

    const [itemphoto, setItemPhoto] = useState(item.image1);

    // Add to cart
    const addtobag = (item) => {
        setCartstatus(true);
        for (var i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].id === item.id) {
                setCartmessage("ALREADY IN THE BAG");
                return;
            }
        }
        axios
            .post("http://localhost:3005/cartProducts", item)
            .then((res) => dispatch(addingToBag(item)));
    };

    const changeState = () => {
        setCartstatus(false);
        setCartmessage("ADDED TO BAG");
    };

    let howtouse = item.how_to_use;
    howtouse = howtouse.split(".");
    return (
        <div className="itemPage">
            <div className="main_div">
                <div className="left">
                    <div className="small_photo">
                        <div className="left_image">
                            <img
                                src={item.image1}
                                alt="image1"
                                onMouseOver={(e) => setItemPhoto(e.target.src)}
                            />
                        </div>
                        <div className="left_image">
                            <img
                                src={item.image2}
                                alt="image2"
                                onMouseOver={(e) => setItemPhoto(e.target.src)}
                            />
                        </div>
                        <div className="left_image">
                            <img
                                src={item.image3}
                                alt="image3"
                                onMouseOver={(e) => setItemPhoto(e.target.src)}
                            />
                        </div>
                    </div>
                    <div className="large_photo">
                        <div className="heart">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/valentine-s-day-21/100/heart-256.png"
                                alt="favourite"
                            />
                        </div>
                        <div className="Photo">
                            <img src={itemphoto} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right_upper">
                        <div className="inside_right_1">
                            <div style={{ fontSize: "25px" }}>{item.title}</div>
                            <div>
                                <span>
                                    <StarRatingShow value={`${item.rating}`} />
                                </span>
                                <span style={{ fontSize: "15px" }}>
                                    {item.rating}/5
                                </span>
                                <span style={{ fontWeight: "550" }}>
                                    {item.ratingNum} ratings & {item.reviews}{" "}
                                    reviews
                                </span>
                                <span style={{ fontWeight: "550" }}>Q&As</span>
                            </div>
                            <div>
                                MRP:
                                <span
                                    style={{ textDecoration: " line-through" }}
                                >
                                    {" "}
                                    ₹{item.price}
                                </span>
                                <span style={{ fontWeight: "bold" }}>
                                    ₹{item.off_price}
                                </span>
                                <span style={{ color: "green" }}>
                                    {item.offer}% Off
                                </span>
                            </div>
                            <div>
                                <span>inclusive of all taxes</span>
                            </div>
                        </div>

                        <div className="inside_right_2">
                            {cartstatus ? (
                                <div
                                    className="inside_right_2_button"
                                    onMouseLeave={changeState}
                                >
                                    <button
                                        style={{
                                            backgroundColor: `${
                                                cartmessage === "ADDED TO BAG"
                                                    ? "#f06418"
                                                    : "black"
                                            }`,
                                        }}
                                    >
                                        {cartmessage}
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="inside_right_2_button"
                                    onClick={() => addtobag(item)}
                                >
                                    <button>ADD TO BAG</button>
                                </div>
                            )}

                            {change ? (
                                <div className="chnge_div">
                                    <div className="location_tag">
                                        <span>
                                            <img
                                                style={{
                                                    height: "18px",
                                                    width: "18px",
                                                }}
                                                src="https://cdn-icons-png.flaticon.com/512/67/67347.png"
                                                alt=""
                                            />
                                        </span>
                                        <span>
                                            Delivery Option for{" "}
                                            <span
                                                style={{
                                                    color: "rgb(252, 39, 121)",
                                                    marginRight: "5px",
                                                }}
                                            >
                                                201304
                                            </span>
                                        </span>
                                        <span>
                                            <button
                                                className="check_btn"
                                                onClick={() =>
                                                    setChange(!change)
                                                }
                                            >
                                                Change
                                            </button>
                                        </span>
                                    </div>
                                    <div>
                                        <span>Shipping to: Noida,India </span>
                                    </div>
                                    <div>
                                        <span style={{ color: "green" }}>
                                            ✔
                                        </span>{" "}
                                        <span>Delivered in 1 week</span>
                                    </div>
                                    <div>
                                        <span style={{ color: "green" }}>
                                            ✔
                                        </span>{" "}
                                        <span>
                                            Cash on Delivery available on orders
                                            above ₹499
                                        </span>
                                    </div>
                                    <div style={{ color: "gray" }}>
                                        <span style={{ fontSize: "20px" }}>
                                            🛈
                                        </span>{" "}
                                        <span>More info</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="inside_right_2_search">
                                    <div className="location_tag">
                                        <span>
                                            <img
                                                style={{
                                                    height: "18px",
                                                    width: "18px",
                                                }}
                                                src="https://cdn-icons-png.flaticon.com/512/67/67347.png"
                                                alt=""
                                            />
                                        </span>
                                        <span>Delivery Option</span>
                                    </div>
                                    <div className="searh_pincode">
                                        <input
                                            style={{
                                                padding: "3px 5px 3px 10px",
                                                fontSize: "16px",
                                            }}
                                            type="number"
                                            placeholder="Enter Pincode"
                                        />
                                        <button
                                            onClick={() => setChange(!change)}
                                        >
                                            Check
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right_down">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>

            <div className="footer_div">Product Description</div>

            <div className="final_div">
                <div className="Description_div">
                    <span
                        style={{
                            color: `${desc ? "rgb(252, 39, 121)" : "black"}`,
                            borderBottom: `${
                                desc ? " 1px solid rgb(252, 39, 121)" : "black"
                            }`,
                        }}
                        onClick={() => setDesc(!desc)}
                    >
                        Description
                    </span>
                    <span
                        style={{
                            color: `${desc ? "black" : "rgb(252, 39, 121)"}`,
                            borderBottom: `${
                                desc ? "balck" : "1px solid rgb(252, 39, 121)"
                            }`,
                        }}
                        onClick={() => setDesc(!desc)}
                    >
                        How To Use
                    </span>
                    <hr />
                    {desc ? (
                        <p className="decs_text">{item.description}</p>
                    ) : (
                        <div className="decs_text">
                            {howtouse.map((e) =>
                                e.length > 1 ? (
                                    <p> • {e}.</p>
                                ) : (
                                    "• Read more on Product Description."
                                )
                            )}
                        </div>
                    )}
                </div>

                <div className="Product_div">
                    <img src={item.image1} alt="product_img" />
                    <div className="title_item">
                        <h4>{item.card_title}</h4>
                    </div>
                    <div className="price_item">
                        MRP:{" "}
                        <span style={{ textDecoration: "line-through" }}>
                            ₹{item.price}
                        </span>{" "}
                        <span>₹{item.off_price}</span>
                        <span style={{ color: "green", marginLeft: "5px" }}>
                            {item.offer}% Off
                        </span>
                    </div>

                    <button style={{ bottom: "0", height: "2.6rem" }}>
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </div>
    );
};
