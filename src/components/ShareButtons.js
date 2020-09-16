import React, { useEffect, useState } from 'react'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';
import { useStaticQuery } from 'gatsby'

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
    const tagiesInitialState = [];     
    const [tagies, setTagies] = useState(tagiesInitialState)

    const baseUrl = site.siteMetadata.siteUrl

    useEffect(() => {
      var _tags=[]; 
      tags.map(tag => {
        _tags=[..._tags, tag.title];
      })
      setTagies(_tags)
    }, [])

    return (
        <div >
            <small>Share in your social networks</small>
            <div>
              <FacebookShareButton url={baseUrl+'/blog/'+slug}>
                  <span style={{paddingLeft: "1rem !important"}} className="fa share-btn fa-facebook"></span>
              </FacebookShareButton>

              <TwitterShareButton  url={baseUrl+'/blog/'+slug} title={title} via={'a-zhospice'} hashtags={tagies} >
                  <span style={{paddingLeft: "1rem !important"}} className="fa share-btn fa-twitter ml-4 mr-4"></span> 
              </TwitterShareButton> 

              <LinkedinShareButton url={baseUrl+'/blog/'+slug} title={title} >
                  <span style={{paddingLeft: "1rem !important"}} className="fa share-btn fa-linkedin"></span>
              </LinkedinShareButton>
            </div>
        </div>
    )
}
export default ShareButtons
