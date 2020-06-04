import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



const PostLinks = props => {
  return (
    <div>
      <div class="post-links">
        {props.previous && (
          <Link to={`${props.basePath}/${props.previous.slug}/`}>
            &#8592; Prev
          </Link>
        )}
        {props.next && (
          <Link to={`${props.basePath}/${props.next.slug}/`}>
            Next &#8594;
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks
