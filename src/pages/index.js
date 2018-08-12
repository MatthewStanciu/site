import React from "react";
import '../style.css'
import {mx} from '../reactstyle'
import { Heading, Flex, Column, Box, Container, Link } from 'rebass'
import { Wrapper, Icon, Medium, SocialMedia,
   Project, ProjectTitle, ProjectDesc, ProjectFinish, Footer } from '../components/components'
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
      <HeaderBlock>
          <Hello>Hi, I'm Matthew.</Hello>
          <Flex>
            <SocialMedia href="https://github.com/TechBug2012" icon="github" />
            <Medium href="https://medium.com/@MatthewStanciu"/>
            <SocialMedia href="https://twitter.com/MatthewStanciu" icon="twitter" />
            <SocialMedia href="https://instagram.com/matthewstanciu" icon="instagram" />
          </Flex>
      </HeaderBlock>
      <HeaderBlock>
        <Left flexDirection='column'>
          <Box width={350}>
            <Subhead>My Recent Projects</Subhead>
          </Box>
          <Project href="https://anonbotwl.glitch.me" title="Anonbot WL" desc="An Instagram bot for students at my school to submit confessions and announce anonymously"></Project>
          <Project href="http://thewritersblock.tech" title="The Writer's Block" desc="A decentralized writing platform that allows users to easily reward their favorite authors with Ethereum. Made at Hack Chicago 2018"></Project>
          <ProjectFinish href="https://sideb-textgen.glitch.me" title="Side B Text Gen" desc="Pretty title and block quote generator to give a nice touch to Medium articles"></ProjectFinish>

        </Left>
      </HeaderBlock>

    </Wrapper>
    <Footer>This site is a WIP!</Footer>
    <Footer>Check out <Link target="_blank" href="https://hackclub.com" color="#E82C3F">Hack Club</Link> while you're waiting for me to finish :)</Footer>
  </React.Fragment>
)

const Hello = Heading.extend.attrs({f: 6, m: 0, fontSize: 70, textAlign: "left"})`
  line-height: 1.5;
  color: white;
  font-family: 'Averta-Bold';
`
const Subhead = Heading.extend.attrs({f: 6, m: 0, fontSize: 30, textAlign: "center"})`
  line-height: 2;
  color: white;
  font-family: 'Averta-Bold';
`
const Left = Flex.extend.attrs({})`
  position: relative;
  left: -30px;
`

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
