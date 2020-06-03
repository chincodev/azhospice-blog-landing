import React from 'react'
import styled from '@emotion/styled'


const PostDetails = props => {
  return (
    <div>
      <p>📅 {props.date}</p>
      <span>•</span>
      <p>{`⏱️${props.timeToRead} min read `}</p>
    </div>
  )
}

export default PostDetails
