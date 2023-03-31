import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../assets/homeImage.jpg'
import '../styles/home.css'
export default function Home() {
  return (
    <div className='home' style={{ backgroundImage : `url(${homeImage})`}}>
        <div className='headerContainer'>
            <h1>Desi Dhaba!</h1>
            <p>FOOD YOU CAN'T RESIST</p>
           <Link to="./menu">
           <button>
                ORDER NOW
           </button>
           </Link>
        </div>
    </div>
  )
}
