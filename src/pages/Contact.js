import React from 'react'
import contactImage from '../assets/contactImage.jpg'
import '../styles/contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
      style={{ backgroundImage : `url(${contactImage})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method='POST'>
            <lable className="lab" htmlfor="name">Full Name</lable>
            <input name="name" placeholder='Enter Full Name...' type='text'/>
            <lable  className="lab" htmlfor="email">Email</lable>
            <input name="email" placeholder='Enter Email...' type='email'/>
            <lable  className="lab" htmlfor="message">Message</lable>
            <textarea rows={6} placeholder="Enter Message" name='message' required></textarea>
            <button type='submit'>
                Submit Message
            </button>
        </form>
      </div>
    </div>
  )
}
