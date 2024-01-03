import React from 'react'
import Footer from '../../Footer/Footer'
import Category from '../../Main/Category/Category'
import Promotion from '../../Main/Promotion/Promotion'
import Trendy from '../../Main/Trendy/Trendy'
import HeroBg from '../../assets/about-bg.png'
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

const PageTwo = () => {
  return (
    <>
    <header>
    <Header image={HeroBg} title={`About Us`} font={`Yesteryear`} color={`#FFF`} fontSize={`120px`} logo={logoImg} pages={[{'title':'Home' , 'route':'/'},{'title':'About' , 'route':'/about'},{'title':'Packages' , 'route':'/packages'},{'title':'Services' , 'route':'/#Category'}]} button={'Get in touch'}>

</Header>
    </header>

<main>
  <AboutPromotion title={'Promotion'} head={'We Provide You Best Europe Sightseeing Tours'} content={'Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!'} img={`${AboutPromotionImg}`} button={'View Packages'} reverse={false}></AboutPromotion>
  <Video title={'Wanderlust'} button={`${VideoButton}`} VideoBg={`${VideoBg}`}></Video>
  <AboutPromotion title={'Promotion'} head={'Our Popular Tour Plans'} content={'Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.'} img={`${TourImg}`} reverse={true} percentOne={'78%'} percentTwo={'55%'} One={'Vacations'} Two={'Honeymoon'}></AboutPromotion>
</main>
<Footer>

</Footer>
</>
  )
}

export default PageTwo