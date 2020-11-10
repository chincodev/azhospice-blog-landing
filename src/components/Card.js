import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
    {
    
      heroImage && body && (
        <article class="col-sm-6 col-xl-4 d-flex">
            {console.log(heroImage)}
            <Link to={`${props.basePath}/${slug}/`} className='card post-card flex-column flex-fill' >
              <div className="top-sec">
                <img loading="lazy" class="card-img-top" fluid={heroImage.fluid} alt="And this isn't my nose. This is a false one." />
                  <div class="card-body flex-column">
                  <small class="d-block text-muted" style={{paddingBottom:"15px"}}>⏱️ {body.childMarkdownRemark.timeToRead} min read</small>
                    <h4 class="card-title" style={{color:"#212121"}}>{title}</h4>
                    <p class="text-muted text-preview" dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.excerpt}}></p>
                </div>
              </div>
              <div class="align-items-center mt-auto card-body">
                <small class="d-block text-muted">📅 {publishDate}</small>
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