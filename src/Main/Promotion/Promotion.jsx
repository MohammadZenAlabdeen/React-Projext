import React from 'react'
import Card from './Card/Card.jsx'
import './PromotionStyle.css'

const Promotion = ({info}) => {
  return (
    <section className='PromotionSection'>
        <div className='Container' >
            {
                info.map(element => {
                return <Card img={element.img} title={element.title} info={info}> </Card>
                }
                )
            }
        </div>
    </section>
  )
}

export default Promotion