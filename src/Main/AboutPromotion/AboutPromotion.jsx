import React from 'react'
import './AboutPromotionStyle.css'

const AboutPromotion = ({title,head,content,button,img,reverse,percentOne,percentTwo,One,Two}) => {
    if(reverse===false){
  return (
    <section className='AboutPromotionSection'>
        <div className='Container'>
                <div className='Text'>
                <span> 
                    {title}
                </span>
                <h1>
                    {head}
                </h1>
                <p>
                    {content}
                </p>
                <button>
                    {button}
                </button>
            </div>
            <div className='Img'>
                <img src={img}>
                </img>
            </div>
        </div>
    </section>
  )
}
return (
    <section className='AboutPromotionSection'>
        <div className='Container'>
                
            <div className='Img'>
                <img src={img}>
                </img>
            </div>
            <div className='Text'>
                <span> 
                    {title}
                </span>
                <h1>
                    {head}
                </h1>
                <p>
                    {content}
                </p>
                <div className='Reverse'>
                    <div>
                    <p>
                        <span> {percentOne}</span>
                   
                    
                    {One}
                </p>
                    </div>
<div>
<p>
    <span> {percentTwo}</span>
                   
                    
                    {Two}
                </p>
</div>

                </div>

            </div>
        </div>
    </section>)}

export default AboutPromotion