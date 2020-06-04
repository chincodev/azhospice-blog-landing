import React from 'react'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';
import {useStaticQuery} from 'gatsby'

const ShareButtons = ({title,tags,slug}) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                image
                siteUrl
              }
            }
          }
        `
      )

    const baseUrl = site.siteMetadata.siteUrl

    return (
        <div >
            <small>Share in your social networks</small>
            <div>
              <FacebookShareButton url={baseUrl+'/blug/'+slug}>
                  <span className="fa share-btn fa-facebook mr-2"></span>
              </FacebookShareButton>
              <TwitterShareButton url={baseUrl+'/blug/'+slug} title={title} via={'@a-zhospice'} hashtags={tags} >
                  <span className="fa share-btn fa-twitter mr-2"></span> 
              </TwitterShareButton> 
              <LinkedinShareButton url={baseUrl+'/blug/'+slug} title={title} >
                  <span className="fa share-btn fa-linkedin mr-2"></span>
              </LinkedinShareButton>
            </div>
        </div>
    )
}
export default ShareButtons
