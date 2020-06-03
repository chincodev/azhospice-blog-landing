import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')



const PageBody = props => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
