
// import './App.css';
import { useState, useEffect } from "react";
// import {Carousels} from "./Carousels";
import { Footer } from './Footer';
// import { Navbar } from './Navbar';

export const Home = () => {
  const baseUrl = "http://localhost:3002/";
  const trending = `${baseUrl}trendingStores`;

  const [topbrands, setTopbrands] = useState([])
  const [OnlyatNykaa, setOnlyatNykaa] = useState([])
  const [TrendingStores, setTrendingStores] = useState([])
  const [FeaturedBrands, setFeaturedBrands] = useState([])
  const [BudgetBuys, setBudgetBuys] = useState([])
  const [beautyadvice, setBeautyadvice] = useState([])
  const [EditorsChoice, setEditorsChoice] = useState([])

  useEffect(() => {
    getTopbrands()
    getOnlyatNykaa()
    getTrendingStores()
    getFeaturedBrands()
    getBudgetBuys()
    getbeautyadvice()
    getEditorsChoice()
  }, [])



  const getTopbrands = () => {
    fetch("http://localhost:3002/topbrands")
      .then((res) => (res = res.json()))
      .then((res) => setTopbrands(res))

  }


  const getOnlyatNykaa = () => {
    fetch("http://localhost:3002/onlyAtNykaa")
      .then((res) => (res = res.json()))
      .then((res) => setOnlyatNykaa(res))
  }


  const getTrendingStores = () => {
    fetch(trending)
      .then((res) => (res = res.json()))
      .then((res) => setTrendingStores(res))
  }



  const getFeaturedBrands = () => {
    fetch("http://localhost:3002/featuredBrands")
      .then((res) => (res = res.json()))
      .then((res) => setFeaturedBrands(res))
  }

  const getBudgetBuys = () => {
    fetch(" http://localhost:3002/budgetBuys")
      .then((res) => (res = res.json()))
      .then((res) => setBudgetBuys(res))
  }


  const getbeautyadvice = () => {
    fetch("http://localhost:3002/beautyadvice")
      .then((res) => (res = res.json()))
      .then((res) => setBeautyadvice(res))
  }

  const getEditorsChoice = () => {
    fetch("http://localhost:3002/editorsChoice")
      .then((res) => (res = res.json()))
      .then((res) => setEditorsChoice(res))
  }


  return (
    <div className="App" >
      {/* <Navbar /> */}
      
      <div className="home-container"  >


        {/* <Carousels /> */}
        <h1 className="home-heading">Top Brands</h1>
        <div className="top-brands"  >
          {
            topbrands.map((item) => (
              <div>
                <div>
                <div className="card-block">
                  <div style={{ background: `url(${item.img})`, width: "100%", height: "300px", backgroundRepeat: "no-repeat", borderRadius: "5px", display: "block" }}></div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-100px", backgroundColor: "white", width: "95%", height: "80px", marginLeft: "10px", borderRadius: "5px" }}>
                  <p style={{ color: "#fc2779", fontSize: "22px" }}>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
                </div>
              </div>
            ))
          }

        </div>

        <h1 className="home-heading">Only At Nykaa</h1>
        <div className="only-at-nykaa block">
          {
            OnlyatNykaa.map((item) => (
              <div>
                <div className="card-block">
                  <div style={{ background: `url(${item.img})`, width: "100%", height: "300px", backgroundRepeat: "no-repeat", borderRadius: "5px", display: "block" }}></div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-100px", backgroundColor: "white", width: "95%", height: "80px", marginLeft: "10px", borderRadius: "5px" }}>
                  <p style={{ color: "#fc2779", fontSize: "22px" }}>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
              </div>
            ))
          }
        </div>

        <h1 className="home-heading">Trending Store and Offers</h1>
        <div className="trending-store">
          {
            TrendingStores.map((item) => (
              <div>
                <div style={{ display: "block" }} className="card-block">
                  <img src={item.img} alt={item.desc1} />
                </div>
              </div>
            ))
          }
        </div>


        <h1 className="home-heading">Featured Brands</h1>
        <div className="featured-brands" style={{ marginBottom: "60px" }}>
          {
            FeaturedBrands.map((item) => (
              <div>

                <div class="card-block">
                  <div style={{ background: `url(${item.img})`, width: "100%", height: "300px", backgroundRepeat: "no-repeat", borderRadius: "5px", display: "block" }}></div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-95px", backgroundColor: "white", width: "100%", height: "80px", borderRadius: "5px" }}>
                  <a href="" style={{textDecoration:"none"}}>
                  <p style={{ color: "#fc2779", fontSize: "17px" }}>{item.desc1}</p>

                  <p style={{fontSize:"14px", color:"black"}}>{item.desc2}</p>
                  </a>

                </div>

              </div>
            ))
          }
        </div>

          
        <h1 className="home-heading">Budget Buys</h1>
        <div className="featured-brands">
          {
            BudgetBuys.map((item) => (
              <div>
                <div style={{ display: "block" }} className="card-block">
                  <img src={item.img} alt={item.desc1} />
                </div>
              </div>
            ))
          }
        </div>


        <h1 className="home-heading">Editors Choice</h1>
        <div className="featured-brands">
          {
            EditorsChoice.map((item) => (
              <div>
                <div style={{ display: "block" }} className="card-block">
                  <img src={item.img} alt={item.desc1} />
                </div>
              </div>
            ))
          }
        </div>

        <h1 className="home-heading">SPECIAL CURATIONS</h1>
        <div className="card-block" style={{ textAlign:"center", marginLeft:"100px", marginBottom:"100px"}}>
          <img src="https://images-static.nykaa.com/uploads/10a78a97-6172-4ebe-bec9-fa89d095d640.jpg?tr=w-600,cm-pad_resize" style={{display:"block", width:"50%", height:"300px" ,marginLeft:"200px"}} alt="" />
        </div>


          <div className="card-block" style={{marginBottom:"60px"}}>
            <img src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-1200,cm-pad_resize" alt="" />
          </div>

      </div>


    </div>

  );
}


