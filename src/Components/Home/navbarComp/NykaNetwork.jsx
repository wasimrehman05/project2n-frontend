import React from 'react'
import { Brands } from './Brands'

export const NykaNetwork = ({status,handleToggle}) => {
  
  
  // const handleToggle = () =>{
  //   seAppDisplay(!appdisplay)
  // }
  
  return (
    <div>

      <div>
        {
          status ? <Brands /> : ""
        }
      </div>
      <div onMouseEnter={()=> handleToggle("a1")} >Toggle Todo</div>
    </div>
  )
}
