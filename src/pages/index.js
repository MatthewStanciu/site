import React from "react";
import '../style.css'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default () => (
  <Wrapper>
    <Helmet
        title='Matthew :)'
        meta={[
        {
          name: 'description',
          content: 'Development portfolio',
        },
        {
          name: 'keywords',
          content: 'reactjs, javascript, front-end, web development',
        },
      ]}
    />
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 10px;
  background: black;
`
