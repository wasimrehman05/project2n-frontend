import React from "react";

import "./Nav2.css";

export const NykaNetwork = ({ status, handleToggle }) => {
    return (
        <div className="social-div">
            <div className=" card-1">
                <div>
                    <img
                        src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
                        alt=""
                    />
                </div>
                <p className="social-head">Nykaa Book</p>
                <p className="social-desc">Nykaa's Digital Magazine</p>
            </div>

            <div className=" card-2">
                <div>
                    <img
                        src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png"
                        alt=""
                    />
                </div>
                <p className="social-head">NYKAA TV</p>
                <p className="social-desc">
                    Master Classes By Expers & Vloggers
                </p>
            </div>

            <div className=" card-3">
                <div>
                    <img
                        src="https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg"
                        alt=""
                    />
                </div>
                <p className="social-head">Beauty Buying Guides</p>
                <p className="social-desc">Tips to Explore while You go</p>
            </div>
        </div>
    );
};
