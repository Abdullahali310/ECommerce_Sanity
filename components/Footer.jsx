import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 AR |Abdullah Ramadan| Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/_._3bdullah/" target="_blank"><AiFillInstagram /></a>

        <a href="https://twitter.com/Abdullah310a" target="_blank"><AiOutlineTwitter /></a>
        
        <a href="https://www.facebook.com/abdullah.ramadan.7311/"  target="_blank"><FaFacebook/></a>
        
      </p>
    </div>
  )
}

export default Footer