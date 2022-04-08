import React from 'react'
import './Nav.css'
export const AppliancesSec = () => {
  return (
    // <div className='appliances-div' style={{position: "relative"}}>
      <div className='appliance-wrapper'>
      <div className='colored-div'>
       <h1 className='heading-nav'>Hair Styling Tools</h1>
        <ul>
          <li className='nav-desc'>Hair Dryers</li>
          <li className='nav-desc'>Straightners</li>
          <li className='nav-desc'>Curling Ircon/Styles</li>
          <li className='nav-desc'>Multi Stylesrs</li>
        </ul>
      </div>
      <div className='non-colored'>
        <h1 className='heading-nav'>Hair Removal Tools</h1>
        <ul>
          <li className='nav-desc'>Epilators</li>
          <li className='nav-desc'>Body Groomers</li>
          <li className='nav-desc'>Bikini Trimmers</li>
        </ul>
      </div>
      <div className='colored-div'>
        <h1 className='heading-nav'>Shaving Tools</h1>
        <ul>
          <li className='nav-desc'>Shavers</li>
          <li className='nav-desc'>Trimmers</li>
        </ul>
      </div>
      <div className='non-colored'>
        <h1 className='heading-nav'>Face/Skin Tools</h1>
        <ul>
          <li className='nav-desc'>Face Epilator</li>
          <li className='nav-desc'>Dermatrollers</li>
          <li className='nav-desc'>Cleansing Brush</li>
          <li className='nav-desc'>Acne Removal</li>
        </ul>
        <h1 className='heading-nav'>Message Tools</h1>
        <ul>
          <li className='nav-desc'>Messagers</li>
        </ul>
        <h1 className='heading-nav'>Foot Care</h1>
      </div>
      <div className='colored-div'>
        <h1 className='heading-nav'>Top Brands</h1>
        <ul>
          <li className='nav-desc'>Philips</li>
          <li className='nav-desc'>Alan Truman</li>
          <li className='nav-desc'>Dyson</li>
          <li className='nav-desc'>VEGA</li>
          <li className='nav-desc'>Braun</li>
          <li className='nav-desc'>Ikonic Professional</li>
          <li className='nav-desc'>Nova</li>
        </ul>
      </div>
      <div className='non-colored'>
        <h1 className='heading-nav'>Quick Links</h1>
        <ul>
          <li className='nav-desc'>Combos@Nykaa</li>
          <li className='nav-desc'>New Launches</li>
          <li className='nav-desc'>NFBA Nominees 2020</li>
          <li className='nav-desc'>Gifts @ Nykaa</li>
          <li className='nav-desc'>Herbal Hair Care</li>
          <li className='nav-desc'>Routine Finder</li>
        </ul>
      </div>
      </div>
    // </div>
  )
}
