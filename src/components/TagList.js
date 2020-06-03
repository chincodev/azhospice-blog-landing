import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



const TagList = props => {
  return (
    <ul>
      {props.tags.map(tag => (
        <li key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
