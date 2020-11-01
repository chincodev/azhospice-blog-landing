import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



const PostLinks = props => {
  return (
    <div>
      <div class="post-links">
        {props.previous && (
          <Link to={`${props.basePath}/${props.previous.slug}/`} className="page-buttons">
            &#8592; Prev
          </Link>
        )}
        {props.next && (
          <Link to={`${props.basePath}/${props.next.slug}/`} className="page-buttons">
            Next &#8594;
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks
