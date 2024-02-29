import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import squarefeet from './footer images/Group 15.png'
import twitter from './footer images/Item_margin.png'
import facebook from './footer images/Item → Link.png'
import linkedin from './footer images/Item → Link (1).png'
import instagram from './footer images/Item → Link (2).png'

const Footer = () => {
  return (
    <div>
      <div className='footer resp-footer'>
        <div id="first-div">
          <Link to="/"><img className='footer-squarefeet' src={squarefeet} alt=""></img></Link>
          <p className='footer-p2'>Welcome to our 21 sq ft.com</p>
          <div className='footer-images-gap'>
            <img className='twitter' src={twitter} alt=""></img>
            <img className='facebook' src={facebook} alt=""></img>
            <img className='linkedin' src={linkedin} alt=""></img>
            <img className='instagram' src={instagram} alt=""></img>
          </div>
        </div>
        {/* <div className='footer-midd-flex'> */}
        <div id="two-div" className='footer-p-gap'>
          <p className='footer-p1'>Links</p>
          <p className='footer-p2'><Link className='footer-link-color' to="/category">Categories </Link></p>
          <p className='footer-p2'><Link className='footer-link-color' to="/blog">Blog</Link></p>
          <p className='footer-p2'><Link className='footer-link-color' to="/login">Login</Link></p>
        </div>
        <div id="three-div" className='footer-p-gap'>
          <p className='footer-p1'>Others</p>
          <p className='footer-p2'><Link className='footer-link-color' to="/privacyp">Privacy Policy</Link></p>
          <p className='footer-p2'><Link className='footer-link-color' to="/terms">Terms and Conditions</Link></p>
          {/* <p className='footer-p2'><Link to="/terms">Conditions</Link></p> */}
        </div>
        <div id="four-div" className='footer-p-gap'>
          <p className='footer-p1'>Newsletter</p>
          <p className='footer-p2'>Subscribe for our latest resources</p>
          <div className='footer-buttons'>
            <button className='footer-mail'>Enter Email</button>
            <button className='footer-subscribe'>Subscribe</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Footer;
