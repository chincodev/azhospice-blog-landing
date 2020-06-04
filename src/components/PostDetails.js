import React from 'react'
import styled from '@emotion/styled'


const PostDetails = props => {
  return (
    <div class="post-details">
      <p>📅 {props.date}
      <br></br>
      {`⏱️ ${props.timeToRead} min read `}</p>
    </div>
  )
}

export default PostDetails
