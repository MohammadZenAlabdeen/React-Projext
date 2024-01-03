import React from 'react'
import './CategoryStyle.css'

const Category = ({title,head,services,text}) => {
    console.log(services)
  return (
    <section className='CategorySection' id='Category'>
        <div className='Container'>
            <span>
                {title}
            </span>
            <h1>
                {head}
            </h1>
            <div className='CardContainer'>
                {
                   
                    services.map(element => {
                        return <div className='Card'>
                                <img src={element.img}/>
                                <h2>{element.title}</h2>
                                <p>{text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Category