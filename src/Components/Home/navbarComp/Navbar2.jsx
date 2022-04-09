import React from 'react'
import { Link } from 'react-router-dom'
import './Nav2.css'

import { AppliancesSec } from './AppliancesSec'
import Makeup from './Makeup'
import { NykaFashion } from './NykaFashion'
import { Skin } from './Skin'

import { NykaNetwork } from './NykaNetwork'
// import { SearchIcon } from "@heroicons/react/outline"
// import { Brands } from './navbarComp/Brands'
export const Navbar2 = () => {

    return (
        <div>
            {/* <div class='nav2' style={{ position: "absolute", marginTop: "80px", width: "90%" }}>
                <div style={{ display: "flex" }}>
                    <ul>
                        <li>
                        <div class="subnav">
                        <button class="subnavbtn" ><Link to={'./'}> Brands </Link></button>
                        <div class="subnav-content-2">
                            <NykaFashion />
                        </div>
                    </div>
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

            </div> */}




            <div class="navbar">
                <div className='uppperNav' style={{ height: "40px" }}>
                    <div className='offer-banner' style={{ width: "100%" }}>


                        <div className='right-div' style={{ float: "right", width: "500px", height: "40px" }}>
                            <ul style={{ marginTop: "-6px", display: "inline-block" }}>
                                <li>
                                    <span className='icon-svg'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <title>mobile icon</title>
                                            <g opacity=".92" fill="#000"><path d="M17.25 3.5v17H6.75v-17h10.5zm.5-1.5H6.25a1 1 0 00-1 1v18a1 1 0 001 1h11.5a1 1 0 001-1V3a1 1 0 00-1-1z"></path><path d="M13 6h-2a.75.75 0 110-1.5h2A.75.75 0 1113 6zM12 19.48a1 1 0 100-2 1 1 0 000 2z"></path></g></svg>
                                    </span>
                                    <span>Get App</span>
                                </li>

                                <li>
                                    <span className='icon-svg'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <title>address icon</title>
                                            <g opacity=".92" fill="#000"><path d="M12 8a2.01 2.01 0 110 4 2.01 2.01 0 110-4zm0-1.5a4 4 0 00-.68.06 3.5 3.5 0 00.68 6.93 3.5 3.5 0 000-7v.01z"></path><path d="M12 3.5a6.94 6.94 0 012.22.37 6.53 6.53 0 014.28 6.47 6.6 6.6 0 01-1.78 4.49L12 20.24l-4.7-5.38a6.94 6.94 0 01-1.8-4.65A6.62 6.62 0 0112 3.5zM12 2a8.09 8.09 0 00-8 8.21 8.42 8.42 0 002.15 5.61l5.1 5.83a1.001 1.001 0 001.5 0l5.1-5.83A8.05 8.05 0 0020 10.36a8 8 0 00-5.31-7.91A8.34 8.34 0 0012 2z"></path></g></svg>
                                    </span>
                                    <span>
                                        Store & Events
                                    </span>
                                </li>

                                <li>
                                    <span className='icon-svg'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <title>giftcard icon</title>
                                            <g opacity=".92" fill="#000"><path d="M16 15.6h2.2a.6.6 0 000-1.2H16a.6.6 0 000 1.2z"></path><path d="M21 4.5H3a1 1 0 00-1 1v13a1 1 0 001 1h18a1 1 0 001-1v-13a1 1 0 00-1-1zM3.5 6h4.9v1.66a2.12 2.12 0 00-.69-.47 1.9 1.9 0 00-.39-.11 1.75 1.75 0 00-.4 0c-.258 0-.513.05-.75.15a2.12 2.12 0 00-.69.47 2.23 2.23 0 000 3c.078.077.166.144.26.2H3.5V6zM8 10.32a4.709 4.709 0 01-1.7-.45 1 1 0 010-1.38.86.86 0 01.61-.25.85.85 0 01.61.25A4.47 4.47 0 018 10.32zM8.4 18H3.5v-5.9H7l-1.42 1.38a.59.59 0 000 .85.6.6 0 00.84 0l2-2L8.4 18zm12.1 0H9.6v-5.65l2 2a.6.6 0 00.974-.656.59.59 0 00-.134-.194l-1.39-1.4h9.45V18zM10 10.32a5.16 5.16 0 01.46-1.83.85.85 0 01.61-.25.86.86 0 01.61.25 1 1 0 010 1.37 4.42 4.42 0 01-1.68.46zm10.48.58h-8.15a1.45 1.45 0 00.23-.19 2 2 0 00.26-.33 2.22 2.22 0 000-2.38 1.64 1.64 0 00-.26-.33 1.579 1.579 0 00-.32-.27 1.9 1.9 0 00-.37-.2 2.13 2.13 0 00-1.57 0 2.23 2.23 0 00-.69.47V6H20.5l-.02 4.9z"></path></g></svg>
                                    </span>
                                    <span>Gift Card</span>
                                </li>

                                <li>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <title>help icon</title>
                                            <g opacity=".92" fill="#000"><path d="M12 4.5c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"></path><path d="M12 16.4a.8.8 0 100-1.6.8.8 0 000 1.6zM12 13.6c-.4 0-.7-.3-.8-.8v-1.4c0-.4.3-.8.8-.8.6 0 1.2-.5 1.2-1.1 0-.6-.5-1.2-1.1-1.2-.6 0-1.2.5-1.2 1.1 0 .4-.3.8-.8.8s-.7-.2-.7-.7c0-1.5 1.2-2.6 2.7-2.6 1.5 0 2.6 1.2 2.6 2.7 0 1.2-.8 2.2-1.9 2.5v.8c-.1.4-.4.7-.8.7z"></path></g></svg>
                                    </span>
                                    <span>Help</span>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className='nav-bar-wrapper'>
                    <a href="#home">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png" alt="nykaa" style={{ height: "100px", width: "100%", display: "block", marginTop: "-20px" }} />
                    </a>

                    <div class="subnav">
                        <button class="subnavbtn" ><Link to={'./'}> Categories </Link></button>
                        <div class="subnav-content">
                            <NykaFashion />
                        </div>
                    </div>
                    <div class="subnav">
                        <button class="subnavbtn" ><Link to={'./'}> Brands </Link></button>
                        <div class="subnav-content">
                            <NykaFashion />
                        </div>
                    </div>
                    <div class="subnav">
                        <button class="subnavbtn"> <Link to={'./'}> Nykaa Fashion </Link></button>
                        <div class="subnav-content">
                            <AppliancesSec />

                        </div>
                    </div>
                    <div class="subnav" >
                        <button class="subnavbtn"> <Link to={'./'}> Beauty Advice </Link></button>
                        <div class="subnav-content">
                            <NykaNetwork />
                        </div>
                    </div >

                    <div class="subnav" >
                        <button class="subnavbtn"> <Link to={'./'}> Nykaa Network </Link></button>
                        <div class="subnav-content">

                        </div>
                    </div >

                </div >


                <div className='search-div' style={{ float: "left", marginTop: "10px", padding: "0.8%" }}>
                    <svg width="20" height="20" viewBox="0  0 24 24" opacity="48%" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path></svg>
                    <path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path>
                    {/* <i class="fa fa-light fa-magnifying-glass"  style={{fontSize:"20px", opacity:"48", fill:"grey"}}></i> */}
                    <input type="text" className='search' placeholder='Search on Nykaa' style={{ border: "none", width: "150px", outline: "none", background: "transparent" }} />
                </div>


                <div class="dropdown" >
                    <p><i class="fa-regular fa-user dropbtn" style={{ marginRight: "5px" }}></i>Account</p>
                    <div class="dropdown-content">
                        <p><i class=" fa fa-regular fa-book-bookmark" style={{ marginRight: "10px", height: "20px" }} ></i>Orders</p>
                        <p href="#"> <i style={{ marginRight: "10px", height: "20px" }} class="fa-regular fa-user"></i> Profile</p>
                        <p href="#"> <i style={{ marginRight: "10px" }} class="fa fa-wallet fa-light"></i> Wallet</p>
                        <p><i class="fa-regular fa-heart" style={{ marginRight: "10px" }} ></i> Favourite</p>
                        <p><i class="fa fa-light fa-power-off" style={{ marginRight: "10px" }}></i> Log Out</p>

                    </div>

                </div>

                <div>

                    <Link to={'./cart'}>
                        {/* <i class=" fa fa-light fa-bag-shopping" style={{ marginLeft: "170px", color: "black" }}></i> */}
                        <i class="fa fa-solid fa-bag-shopping" style={{ marginLeft: "170px", color: "grey", height:"20px"}}></i>
                        {/* <img src="https://cdn2.iconfinder.com/data/icons/air-passenger-transportation/512/carryon-256.png" style={{ marginLeft: "170px", color: "black" }} alt="" /> */}
                    </Link>
                </div>


                <div>

                </div>

            </div>



            <div class="navbar-2">
                <div className='navbar-2-wrapper'>
                    <div class="subnav-2">

                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}> Makeup </Link></button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <Makeup />
                        </div>
                    </div>
                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Skin</Link>  </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <Skin />
                        </div>
                    </div>
                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Hair</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./appliances'}>Appliances</Link> </button>
                        <div className='hover-line'></div>

                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Personal Care</Link> </button>
                        <div className='hover-line'></div>

                        <div class="subnav-content-2">
                            <Skin />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Natural</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Mom & Baby</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Health & Wellness</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <Skin />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Men</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2">  <Link className='subnavbtn-2' to={'./'}>Fragrance</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">
                            <AppliancesSec />
                        </div>
                    </div>

                    <div class="subnav-2">
                        <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Luxe</Link> </button>
                        <div className='hover-line'></div>
                        <div class="subnav-content-2">

                            <AppliancesSec />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
