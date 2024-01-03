import React, { useState } from 'react'
import './NavStyle.css'
import menu from './../../assets/menu-icon.svg'
import menuOut from './../../assets/menu-icon-1.svg'
import { Link } from 'react-router-dom'

const nav = ({logo,pages,button}) => {
  const [Open, setOpen] = useState(false)
  return (
    <nav>
        <img src={logo}></img>
        <ul>
            {pages.map(element => {
               return <li><a href={element.route} smooth>{element.title}</a></li>
            })}
        </ul>
        <button className='get'>
            {button}
        </button>
        <button id='menu' onClick={event => {setOpen(!Open)}}>
          <img src={menu}>
          </img>
        </button>
        <div className={Open ? 'Open' : 'side'} >
          <button id='menuOut' onClick={event => {setOpen(!Open)}}>
              <img src={menuOut}>
              </img>
          </button>
          <div>
          <ul>
            {pages.map(element => {
               return <li><a href={element.route} smooth>{element.title}</a></li>
            })}
        </ul>
        <button className='getSide'>
            {button}
        </button>
          </div>

        </div>
    </nav>

  )
}

export default nav