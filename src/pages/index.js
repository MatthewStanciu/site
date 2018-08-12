import React from "react";
import '../style.css'
import {mx} from '../reactstyle'
import { Heading, Flex, Column, Box, Container, Link, Text } from 'rebass'
import { Wrapper, Icon, Medium, SocialMedia, Paragraph,
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
    <Wrapper>
      <CenteredBox>
        <Flex flexDirection='column'>
          <SmallerHello>A cool paragraph about me!</SmallerHello>
          <Paragraph color="white" text="This paragraph is a work in progress,
            but soon I will fill this space with things about me: who I am, where I'm from, how
            old I am, etc. Then I will create another list that shows off my current positions
            instead of my current projects. It might be a while because right now it's only
            optimized for mobile and sizing this correctly for both desktop and mobile is
            tricky, especially with all the other work I have to do!" />
            <Flex flexDirection='column'>
              <Box width={350}>
                <Subhead>My Positions</Subhead>
                <Project href="#" title="Position 1" desc="Description 1"></Project>
                <ProjectFinish href="#" title="Position 2" desc="Description 2"></ProjectFinish>
              </Box>
            </Flex>
        </Flex>
      </CenteredBox>
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
const SmallerHello = Heading.extend.attrs({f: 6, m: 0, fontSize: 50, textAlign: "center"})`
  line-height: 1.5
  color:white;
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
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
