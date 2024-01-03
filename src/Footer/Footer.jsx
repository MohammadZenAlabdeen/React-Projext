import React from 'react'
import logo from './../assets/footer-logo.svg'
import icon4 from './../assets/twoo.svg'
import icon1 from './../assets/linkedin.svg'
import icon3 from './../assets/twitter.svg'
import icon2 from './../assets/messenger.svg'
import './FooterStyle.css'

const Footer = () => {
  return (
    <footer>
        <div className='Container'>
            <div className='LogoContainer'>
              <img src={logo} id='FooterLogo'
              ></img>
              <p>
              Travel helps companies manage payments easily.
              </p>
                <div className='Icons'>
                  <img src={icon1}></img>
                  <img src={icon2}></img>
                  <img src={icon3}></img>
                  <img src={icon4}></img>

                </div>
            </div>
            <div className='ListContainer'>
              <ul>
                <li>
                  <h1>
                  Company
                  </h1>
                </li>
                <li>
                About Us
                </li>
                <li>
                Careers
                </li>
                <li>
                Blog
                </li>
                <li>
                Pricing
                </li>
              </ul>

            </div>
            <div className='ListContainer'>
            <ul>
                <li>
                  <h1>
                  Destinations
                  </h1>
                </li>
                <li>
                Maldives
                </li>
                <li>
                Los Angelas
                </li>
                <li>
                Las Vegas
                </li>
                <li>
                Torronto
                </li>
              </ul>
            </div>
        </div>
        <div id='FooterEnd'>
        <span >
        Copyright @ Xpro 2023 All Rights Reserved.
        </span>
        </div>

    </footer>
  )
}

export default Footer