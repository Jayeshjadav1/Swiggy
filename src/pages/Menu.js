import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItam from '../componants/MenuItam'
import '../styles/menu.css'
export default function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>{ MenuList.map((menuItem, key)=>{
        return <MenuItam  key={key}
                          image={menuItem.image}  
                          name={menuItem.name}
                          price={menuItem.price} /> 
      }) }</div>
    </div>
  )
}
