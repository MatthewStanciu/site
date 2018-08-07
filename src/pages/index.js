import React from "react";
import '../style.css'
import { Heading, Flex } from 'rebass'
import { Wrapper } from '../components/components'
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
    <Hello>Hi, I'm Matthew.</Hello>
  </Wrapper>
)

const Hello = Heading.extend.attrs({f: 6, mx: 300, my: 150, fontSize: 80})`
  line-height: 1;
  color: white;
  font-family: 'Averta-Bold';
`
