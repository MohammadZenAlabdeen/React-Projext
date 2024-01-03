
import Nav from './Nav/Nav.jsx'
import Hero from './Hero/Hero'

const Header = ({image,title,font,color,fontSize,logo,pages,button}) => {
  return (
    <>
        <Nav logo={logo} pages={pages} button={button}>

        </Nav>
        <Hero image={image} title={title} font={font} color={color} fontSize={fontSize}>

        </Hero>
    </>  )
}

export default Header