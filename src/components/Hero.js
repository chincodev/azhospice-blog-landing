import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

// const Wrapper = styled.section`
//   position: relative;
//   min-height: 300px;
//   height: auto;
//   @media (min-width: ${props => props.theme.responsive.small}) {
//     height: ${props => props.height || 'auto'};
//   }
// `
const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  z-index: 2;
  font-size: 3em;
  font-weight: 600;
  position: absolute;
  width: 100%;
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`

const Hero = props => (
  <section>
    <BgImg fluid={props.image.fluid} className='post-hero-image' backgroundColor={'#eeeeee'} />
    <Title>{props.title}</Title>
  </section>
)

export default Hero
