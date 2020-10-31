import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
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
    <Layout>
      <SEO title={"Knowledge base"} description="Interested in learning more about Hospice? This section features the basis of knowledge that directs our hospice." image={ogImage} />
      <div className="blog-cover">
        <div className="blurry">
        <div  className="container py-xl-5 py-lg-3 banner-container">
          <h3 className="text-wh font-weight-bold banner-title">Knowledge base</h3>
          <p className="banner-description">Interested in learning more about Hospice? This section features the basis of knowledge that directs our hospice.</p>
        </div>
        </div>
      </div>
      <div className="container py-xl-5 py-lg-3 postList">
      <CardList>
        {posts.map(({ node: post }) => (
          <Card key={post.id} {...post} basePath={basePath} />
        ))}
      </CardList>
      <Pagination context={pageContext} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
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
