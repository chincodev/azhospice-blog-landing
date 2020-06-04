import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



const TagList = props => {
  return (
    <ul class="tag-list">
      {props.tags.map(tag => (
        <li class="tag-list-item" key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
