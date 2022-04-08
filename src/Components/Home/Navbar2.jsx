import React from 'react'
import { Link } from 'react-router-dom'

import './Nav2.css'
import { AppliancesSec } from './navbarComp/AppliancesSec'
import { NykaFashion } from './navbarComp/NykaFashion'
// import { Brands } from './navbarComp/Brands'
export const Navbar2 = () => {

    return (
        <div>
            <div class='nav2' style={{ position: "absolute", marginTop: "80px", width: "90%" }}>
                <div style={{ display: "flex" }}>
                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Makeup</Link>


                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Skin</Link>


                        </li>
                    </ul>


                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Hair</Link>

                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Appliances</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Personal Care</Link>

                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Natural</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to={"./appliances"} style={{ textDecoration: "none", color: 'black' }}>Mom & Baby</Link>


                        </li>
                    </ul>

                </div>

            </div>


            <div class="navbar">
                <div className=''></div>
                <a href="#home">Home</a>
                <div class="subnav">
                    <button class="subnavbtn" ><Link to={'./'}> Brands </Link></button>
                    <div class="subnav-content">
                        <NykaFashion />
                    </div>
                </div>
                <div class="subnav">
                    <button class="subnavbtn">Services</button>
                    <div class="subnav-content">
                        <AppliancesSec />
                    </div>
                </div>
                <div class="subnav">
                    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
                    <div class="subnav-content">
                        <AppliancesSec />
                    </div>
                </div>
                <a href="#contact">Contact</a>
            </div>



        </div>
    )
}
