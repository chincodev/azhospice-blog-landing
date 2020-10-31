import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
 
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
