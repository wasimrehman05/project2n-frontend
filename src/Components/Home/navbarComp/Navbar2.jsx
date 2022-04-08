import React from 'react'
import { Link } from 'react-router-dom'
import './Nav2.css'
import Nav3 from '../Nav3'
import { AppliancesSec } from './AppliancesSec'
import Makeup from './Makeup'
import { NykaFashion } from './NykaFashion'
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
                <div className='nav-bar-wrapper'>

                    <a href="#home">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png" alt="nykaa" style={{ height: "100px", width: "100%", display: "block", marginTop: "-20px" }} />
                    </a>
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
                            <AppliancesSec />
                        </div>
                    </div >

                    <a href="#contact" style={{ marginTop: "10px", fontWeight: "600" }}> Nykaa Network</a>
                </div >


                <div className='search-div' style={{ float: "left", marginTop: "10px", padding: "1%" }}>
                    <i class="fas fa-search light" style={{ marginRight: "10px", fontSize: "20px" }}></i>
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
                        <i class=" fa fa-light fa-bag-shopping" style={{ marginLeft: "170px", color: "black" }}></i>
                    </Link>
                </div>


                <div>

                </div>

            </div>



            <div class="navbar-2">
                <div className='navbar-2-wrapper'>
                <div class="subnav-2">

                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}> Makeup </Link></button>
                    <div class="subnav-content-2">
                        <Makeup />
                    </div>
                </div>
                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Skin</Link>  </button>
                    <div class="subnav-content-2">
                       <AppliancesSec/>
                    </div>
                </div>
                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Hair</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./appliances'}>Appliances</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Personal Care</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Natural</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Mom & Baby</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Health & Wellness</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Men</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2">  <Link className='subnavbtn-2' to={'./'}>Fragrance</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>

                <div class="subnav-2">
                    <button class="subnavbtn-2"> <Link className='subnavbtn-2' to={'./'}>Luxe</Link> </button>
                    <div class="subnav-content-2">
                    <AppliancesSec/>
                    </div>
                </div>
              
            </div>
            </div>


        </div>
    )
}
