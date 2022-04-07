import React from 'react'
import { Brands } from './Brands'


export const NykaFashion = ({status, handleToggle}) => {
  return (
    <div>

    <div>
      {
        status ? <Brands /> : ""
      }
    </div>
    <div onMouseEnter={()=> handleToggle("a2")} >Toggle Todo</div>
  </div>
  )
}
