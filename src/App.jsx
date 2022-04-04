
import './App.css';

// import {Routes,Route} from 'react-router-dom'
// import Navbar1 from './Components/Home/Navbar1';
import { useState, useEffect } from "react";
export const App = () => {
  const baseUrl= "http://localhost:3002/";
  const trending = `${baseUrl}trendingStores`;
  const other = `${baseUrl}other`;
  
  const [topbrands, setTopbrands] = useState([{}])
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
    console.log(topbrands)
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

      <div className="home-container">

      <h1>Top Brands</h1>

        <div className="top-brands">
          {
            topbrands.map((item) => (
              <div>
                <img src={item.img} alt={item.desc1} />
                <div className='offer-desc'>
                  <p>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
              </div>
            ))
          }

        </div>

        <h1>Only At Nykaa</h1>
        <div className="only-at-nykaa">
        {
          OnlyatNykaa.map((item) => (
            <div>
              <img src={item.img} alt={item.desc1} />
              <div className='offer-desc'>
                  <p>{item.desc1}</p>
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
              <img src={item.img} alt={item.desc1} />
            </div>
          ))
        }
        </div>


        <h1>Featured Brands</h1>
        <div className="featured-brands">
        {
          FeaturedBrands.map((item) => (
            <div>
              <img src={item.img} alt={item.desc1} />
              <div className='offer-desc'>
                  <p>{item.desc1}</p>
                  <p>{item.desc2}</p>

                </div>
            </div>
          ))
        }
        </div>
      </div>

    </div>

  );
}


