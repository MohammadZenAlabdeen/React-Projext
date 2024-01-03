import React from 'react'
import Item from './Item/Item'
import './TrendyStyle.css'

const Trendy = ({title,head,itemInfo}) => {
  return (
    <section className='TrendySection'>
        <div className='Container'>
        <span id='trendyspan'>
                {title}
            </span>
            <h1 id='head'>
                {head}
            </h1>
            <div className='ItemContainer'>
                <Item info={itemInfo}></Item>
            </div>
        </div>
    </section>
    )
}

export default Trendy