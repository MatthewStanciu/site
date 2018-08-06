import React from "react";
import '../style.css'
import { Heading, Flex } from 'rebass'
import {mx} from '../reactstyle'
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

const Hello = Heading.extend.attrs({f: 6, m: 0, fontSize: 80})`
  line-height: 1;
  color: white;
  font-family: 'Averta-Bold';
`

const Wrapper = Flex.extend.attrs({
  direction: ['column', 'row'],
  px: 3,
  mx:100,
  my:150
})`
  text-align: center;
  ${mx[0]} {
    min-height: 80vh;
    text-align: left;
  }
`
