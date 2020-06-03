import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'



const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content:space-between,
  margin-top:4em
`

const Title = styled.h2`
  font-size: 1.1em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.p`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
  font-size: 10px;
`

const ReadingTime = styled.p`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
  font-size: 10px;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <div featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
            <StyledDiv>
              <Date><span className="fa fa-calendar mr-2"></span>{publishDate}</Date>
              <ReadingTime>
                <span className="fa fa-clock-o mr-2"></span> {body.childMarkdownRemark.timeToRead} min read
              </ReadingTime>
            </StyledDiv>
          </Link>
        </div>
      )}
    </>
  )
}

export default Card
