import React from "react";
import '../style.css'
import {mx} from '../reactstyle'
import { Heading, Flex, Column, Box, Container } from 'rebass'
import { Wrapper, Icon, Service } from '../components/components'
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
    <Intro>
      <Container>
        <Hello>Hi, I'm Matthew.</Hello>
      </Container>
      <Container>
        <Flex align="center" justify={['center', 'flex-start']}>
          <Service href="https://github.com/TechBug2012" icon="github" />
          <Service href="https://twitter.com/MatthewStanciu" icon="twitter" />
          <Service href="https://instasgram.com/matthewstanciu" icon="instagram" />
        </Flex>
      </Container>
    </Intro>
  </Wrapper>
)

const Hello = Heading.extend.attrs({f: 6, m: 0, fontSize: 80})`
  line-height: 1.5;
  color: white;
  font-family: 'Averta-Bold';
`

const Intro = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
