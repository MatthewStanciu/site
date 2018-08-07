import React from "react";
import '../style.css'
import {mx} from '../reactstyle'
import { Heading, Flex, Column, Box, Container, Link } from 'rebass'
import { Wrapper, Icon, SocialMedia, Footer } from '../components/components'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default () => (
  <React.Fragment>
    <Wrapper>
      <Helmet
          title='❤️ Matthew Stanciu'
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
          <Hello>Hi, I'm Matthew.</Hello>
          <Flex>
            <SocialMedia href="https://github.com/TechBug2012" icon="github" />
            <SocialMedia href="https://twitter.com/MatthewStanciu" icon="twitter" />
            <SocialMedia href="https://instagram.com/matthewstanciu" icon="instagram" />
            <SocialMedia href="https://medium.com/@MatthewStanciu" icon="medium" />
          </Flex>
      </Intro>
    </Wrapper>
    <Footer>This site is a WIP!</Footer>
    <Footer>Check out <Link href="https://hackclub.com" color="#E82C3F">Hack Club</Link> while you're waiting for me to finish :)</Footer>
  </React.Fragment>
)

const Hello = Heading.extend.attrs({f: 6, m: 0, fontSize: 70})`
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
