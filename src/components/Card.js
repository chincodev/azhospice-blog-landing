import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
    {
    
      heroImage && body && (
        <article class="col-sm-6 col-xl-4 ">
            <Link to={`${props.basePath}/${slug}/`}>
                <div class="card post-card d-flex flex-column">
                    <Img  class="card-img-top" fluid={heroImage.fluid} alt="And this isn't my nose. This is a false one." />
                    <div class="card-body d-flex flex-column">
                    <small class="d-block text-muted" style={{paddingBottom:"15px"}}>⏱️ {body.childMarkdownRemark.timeToRead} min read</small>
                      <h4 class="card-title" style={{color:"#212121"}}>{title}</h4>
                      <div class="text-muted text-preview" dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.excerpt}}></div>
                      <div class="d-flex align-items-center pt-5 mt-auto">
                          <small class="d-block text-muted">📅 {publishDate}</small>
                      </div>
                    </div>
                </div>
            </Link>
        </article>
      )
    }
      
    </>
  )
}

export default Card

{/* {heroImage && body && (
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
      )} */}