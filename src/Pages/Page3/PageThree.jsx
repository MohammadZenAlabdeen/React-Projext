import React from 'react'
import Footer from '../../Footer/Footer'
import Category from '../../Main/Category/Category'
import Promotion from '../../Main/Promotion/Promotion'
import Trendy from '../../Main/Trendy/Trendy'
import HeroBg from '../../assets/packages-bg.png'
import Service1 from '../../assets/service-1.png'
import Service2 from '../../assets/service-2.png'
import Service3 from '../../assets/service-3.png'
import Service4 from '../../assets/service-4.png'
import PromotionCard1 from '../../assets/e1.png'
import PromotionCard2 from '../../assets/e2.png'
import TrendImg1 from '../../assets/n1.png'
import TrendImg2 from '../../assets/n2.png'
import TrendImg3 from '../../assets/n3.png'
import TrendIcon1 from '../../assets/flag-1.png'
import TrendIcon2 from '../../assets/flag-2.png'
import TrendIcon3 from '../../assets/flag-3.png'
import Header from '../../Header/Header.jsx'
import logoImg from '../../assets/logo.png'
import AboutPromotion from '../../Main/AboutPromotion/AboutPromotion.jsx'
import AboutPromotionImg from '../../assets/promotion_img.png'
import Video from '../../Main/Video/Video.jsx'
import VideoButton from './../../assets/video-play.svg'
import VideoBg from './../../assets/video-banner.png'
import TourImg from './../../assets/TourPlans-img.png'
import Packages from '../../Main/Packages/Packages.jsx'
import City1 from '../../assets/city-1.png'
import City2 from '../../assets/city-2.png'
import City3 from '../../assets/city-3.png'
import City4 from '../../assets/city-4.png'
import City5 from '../../assets/city-5.png'
import City6 from '../../assets/city-6.png'
let PackagesInfo=
    [
        {
            'img':`${City1}`,
            'date':'27, September 2023',
            'people':'30+ People',
            'country':'Maldives',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'3000 $',
            'rating':'5.0'
        },
        {
            'img':`${City2}`,
            'date':'13, October 2023',
            'people':'120+ People',
            'country':'Switzerland',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'1290 $',
            'rating':'4.9'
        },
        {
            'img':`${City3}`,
            'date':'2, November 2022',
            'people':'139+ People',
            'country':'Berlin',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'2790 $',
            'rating':'5.0'
        },
        {
            'img':`${City4}`,
            'date':'14, December 2022',
            'people':'50+ People',
            'country':'Torronto',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'1110 $',
            'rating':'4.0'
        },
        {
            'img':`${City5}`,
            'date':'20, September 2022',
            'people':'80+ People',
            'country':'Baku',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'1220 $',
            'rating':'4.5'
        },
        {
            'img':`${City6}`,
            'date':'27, August 2022',
            'people':'100+ People',
            'country':'Chinese',
            'content':'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
            'price':'2500 $',
            'rating':'5.0'
        }
    ]


const PageThree = () => {
  return (
    <>
    <header>
    <Header image={HeroBg} title={`Travel With Us`} font={`Yesteryear`} color={`#FFF`} fontSize={`120px`} logo={logoImg} pages={[{'title':'Home' , 'route':'/'},{'title':'About' , 'route':'/about'},{'title':'Packages' , 'route':'/packages'},{'title':'Services' , 'route':'/home/#Category'}]} button={'Get in touch'}>

</Header>
    </header>

<main>
    <Packages PackagesInfo={PackagesInfo}></Packages>
</main>
<Footer>

</Footer>
</>
  )
}

export default PageThree