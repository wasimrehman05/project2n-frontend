
// import './App.css';

import { useState, useEffect } from "react";
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
  const [HiddenGems, setHiddenGems] = useState([])
  const [EditorsChoice, setEditorsChoice] = useState([])

  useEffect(() => {
    getTopbrands()
    getOnlyatNykaa()
    getTrendingStores()
    getFeaturedBrands()
    getBudgetBuys()
    getHiddenGems()
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


  const getHiddenGems = () => {
    fetch("http://localhost:3002/hiddenGems")
      .then((res) => (res = res.json()))
      .then((res) => setHiddenGems(res))
  }

  const getEditorsChoice = () => {
    fetch("http://localhost:3002/editorsChoice")
      .then((res) => (res = res.json()))
      .then((res) => setEditorsChoice(res))
  }


  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="home-container"  >


          <h1 style={{marginTop:"100px"}}>Top Brands</h1> 
        <div className="top-brands"  >
          {
            topbrands.map((item) => (
              <div>
                <div>
                  <div  className="card-block">
                    <img src={item.img} alt={item.desc1} />
                  </div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-105px", backgroundColor: "white", position: "relative", width: "95%", height: "80px", marginLeft: "10px", borderRadius: "5px" }}>
                  <p style={{ color: "#fc2779", fontSize: "22px" }}>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
              </div>
            ))
          }

        </div>

        <h1>Only At Nykaa</h1>
        <div className="only-at-nykaa block">
          {
            OnlyatNykaa.map((item) => (
              <div>
                <div>
                  <div style={{ display: "block" }} className="card-block">
                    <img src={item.img} alt={item.desc1} className="card-block" />
                  </div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-105px", backgroundColor: "white", position: "relative", width: "95%", height: "80px", marginLeft: "10px", borderRadius: "5px" }}>
                  <p style={{ color: "#fc2779", fontSize: "22px" }}>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
              </div>
            ))
          }
        </div>

        <h1>Trending Store and Offers</h1>
        <div className="trending-store">
          {
            TrendingStores.map((item) => (
              <div>
                <div style={{ display: "block" }} className="card-block">
                    <img src={item.img} alt={item.desc1}  />
                  </div>
              </div>
            ))
          }
        </div>


        <h1>Featured Brands</h1>
        <div className="featured-brands" style={{marginBottom: "60px"}}>
          {
            FeaturedBrands.map((item) => (
              <div>
                
                <div>
                  <div style={{ display: "block" }} className="card-block">
                    <img src={item.img} alt={item.desc1}  />
                  </div>
                </div>
                <div className='offer-desc' style={{ marginTop: "-100px", backgroundColor: "white", position: "relative", width: "100%", height: "80px" }}>
                  <p style={{ color: "#fc2779", fontSize: "17px" }}>{item.desc1}</p>
                  <p style={{fontSize: "15px"}}>{item.desc2}</p>

                </div>
              </div>
            ))
          }
        </div>
      </div>

      <Footer />

    </div>

  );
}


