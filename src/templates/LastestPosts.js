import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

const Posts = (props) => {
    console.log(props)
  const posts = props.data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  let featuredPost
  let ogImage

  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
  try {
    ogImage = posts[0].node.heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
      <CardList>
        {posts.map(({ node: post }) => (
          <Card key={post.id} {...post} basePath={basePath} />
        ))}
      </CardList>
  )
}

export const query = graphql`
  {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
      skip: 0
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    }
  
`

export default Posts
