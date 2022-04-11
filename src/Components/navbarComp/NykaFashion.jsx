import React from 'react'
// import { Brands } from './Brands'
import "./Nav.css"

export const NykaFashion = ({ status, handleToggle }) => {
  return (
    <div className='appliance-wrapper' style={{ display: "flex" }}>
      <div className='colored-div'>
        <h1 className='heading-nav'>Hair Styling Tools</h1>
        <ul>

          <div className='search-div nav-desc' style={{ float: "left", marginRight:"50px", marginTop: "10px", padding: "0.8%",width:"100%", borderRadius:"0", background:"white", border:"1px solid grey"}}>
            <svg width="20" height="20" viewBox="0  0 24 24" opacity="48%" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path></svg>
            <path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path>
            {/* <i class="fa fa-light fa-magnifying-glass"  style={{fontSize:"20px", opacity:"48", fill:"grey"}}></i> */}
            <input type="text" className='search' placeholder='Search on Nykaa' style={{ border: "none", width: "150px", outline: "none", background: "transparent" }} />
          </div>
          
          <li className='nav-desc'>Hair Dryers</li>
          <li className='nav-desc'>Straightners</li>
          <li className='nav-desc'>Curling Ircon/Styles</li>
          <li className='nav-desc'>Multi Stylesrs</li>
        </ul>
      </div>


      <div className='brand-img' style={{ width: "15%" }}>
        <ul>
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/For-Nykaa-Megamenu-New.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/Header/mac.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png" alt="" />
        </ul>

      </div>

      <div className='brand-img' style={{ width: "15%" }}>
        <ul>
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/NATURAL-LOGO.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/HeaderIcons/The-Face-Shop.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/colorbar-logoforui.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/nyx_New.png" alt="" />
          <img src="https://images-static.naikaa.com/media/wysiwyg/2020/CT-Newlaunches-118x55.png" alt="" />
        </ul>
      </div>

      <div className='brand-img' style={{ width: "15%" }}>
        <ul>
          <img src="https://adn-static1.nykaa.com/media/wysiwyg/NFBA2020/TooFaced_logos.png?1?lk" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/MegaMenuImages/Kaybeauty-new-launch-logo.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/JML-Logo.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Minimalist_logos.png?agg" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/Pixi%20Logo_118px%20X%2055px.png" alt="" />
          <img src="https://adn-static1.nykaa.com/media/wysiwyg/2021/SDJ-Logo-118-x-55-px.png" alt="" />
        </ul>
      </div>

      <div className='brand-img' style={{ width: "15%" }}>
        <ul>
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/rsvp.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/mondano.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Elf-New-launches-118x55.png?agg" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/ABCD-Two/See-All_CTA.png" alt="" />
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Prada.png" alt="" />
          <img src="https://adn-static1.nykaa.com/media/wysiwyg/2020/Dior%20logo_118x55.jpg?1?lkkl" alt="" />
        </ul>

      </div>
    </div>

  )
}
