import React from 'react'
import styled from 'styled-components'

const Margin = styled.div`

margin-left:20px
`


function Main(props) {
  return (
    <Margin>
      {props.children}
    </Margin>
  )
}

export default Main
