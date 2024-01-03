import React from 'react'
import Footer from '../../Footer/Footer'
import Category from '../../Main/Category/Category'
import Promotion from '../../Main/Promotion/Promotion'
import Trendy from '../../Main/Trendy/Trendy'
import HeroBg from '../../assets/header-bg.png'
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

const PageOne = () => {
  return (
    <>
    <header>
    <Header image={HeroBg} title={`No matter where you're going to, we’ll take you there`} logo={logoImg} font={`Poppins`} color={`#2F2F2F`} fontSize={`46px`} pages={[{'title':'Home' , 'route':'/'},{'title':'About' , 'route':'/about'},{'title':'Packages' , 'route':'/packages'},{'title':'Services' , 'route':'/home/#Category'}]} button={'Get in touch'}>

</Header>
    </header>

<main>
<Category 
    title={'CATEGORY'}
     head={'We Offer Best Services'} 
     services={[
      {
        'img':`${Service1}`,
        'title':'Guided Tours'
      },
      {
        'img':`${Service2}`,
        'title':'Best Flights Options'
      },
      {
        'img':`${Service3}`,
        'title':'Religious Tours'
      },
      {
        'img':`${Service4}`,
        'title':'Medical insurance'
      }
     ]}
     text={'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'}
     ></Category>
     <Promotion info={[{'img':`${PromotionCard1}`,'title':'Explore Nature'},{'img':`${PromotionCard2}`, 'title':'Explore Cities'}]}>
     </Promotion>
     <Trendy   title={'CATEGORY'}
     head={'Our Trending Tour Packages'} 
     itemInfo={
      [{'img':`${TrendImg1}`,
          'icon':`${TrendIcon1}`,
          'days':'8 days',
          'people':'30 People going',
          'country':'Switzerland',
          'description':'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
          'button':'Explore Now'},
          {'img':`${TrendImg2}`,
          'icon':`${TrendIcon2}`,
          'days':'8 days',
          'people':'60 People going',
          'country':'Amazon',
          'description':'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
          'button':'Explore Now'},{
          'img':`${TrendImg3}`,
          'icon':`${TrendIcon3}`,
          'days':'8 days',
          'people':'120 People going',
          'country':'Giza',
          'description':'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
          'button':'Explore Now'
        }
          ]}></Trendy>
</main>
<Footer>

</Footer>
</>
  )
}

export default PageOne