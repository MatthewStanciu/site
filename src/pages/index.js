import React from "react";
import Fade from 'react-reveal/Fade';
import '../style.css'
import {mx} from '../screensizes'
import { Heading, Flex, Column, Box, Container, Link, Text } from 'rebass'
import { Wrapper, SmallerWrapper, Icon, Medium, SocialMedia, Paragraph,
   Project, ProjectTitle, ProjectDesc, ProjectFinish, Footer } from '../components/components'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import FadeIn from 'react-fade-in'

export default () => (
  <React.Fragment>
    <FadeIn delay={500} transitionDuration={750}>
      <Wrapper>
        <Helmet
            title='❤️ Matthew Stanciu'
            meta={[
            {
              name: 'description',
              content: 'My personal site',
            },
            {
              name: 'keywords',
              content: 'reactjs, javascript, front-end, web development',
            },
          ]}
        />
        <HeaderBlock>
            <Hello>Hi, I’m Matthew.</Hello>
            <Flex ml={-10}>
              <SocialMedia href="https://github.com/MatthewStanciu" icon="github" />
              <Medium href="https://medium.com/@MatthewStanciu"/>
              <SocialMedia href="https://twitter.com/MatthewStanciu" icon="twitter" />
              <SocialMedia href="https://instagram.com/matthewstanciu" icon="instagram" />
              <SocialMedia href="mailto:mattbstanciu@gmail.com" icon="mail" />
            </Flex>
        </HeaderBlock>
        <HeaderBlock>
          <Left flexDirection='column' mt={[null, 60]}>
            <Box width={350}>
              <Subhead>My Recent Projects</Subhead>
              <Project width={350} href="https://www.instagram.com/anonbot.wl/" title="Anonbot WL" desc="An Instagram bot for students at my school to submit confessions and announce anonymously" />
              <Project width={350} href="https://hackclubplaylist.glitch.me" title="Hack Club Playlist" desc="A fun interface for attendess of my school’s Hack Club to songs to a collaborative playlist" />
              <ProjectFinish width={350} href="https://github.com/wl-hackclub/make-campaign" title="Make Campaign" desc="A poster, flyer, website, and email campaign I ran to promote WLHS Hack Club" />
            </Box>
          </Left>
        </HeaderBlock>
      </Wrapper>
    </FadeIn>
    <Break />
      <SmallerWrapper>
        <CenteredBox>
          <CenteredHeaderBlock>
            <HeaderBlock>
              <FadeIn delay={500} transitionDuration={750}>
                <SmallerHello>Lover of words and software.</SmallerHello>
              </FadeIn>
              <Fade>
                <Paragraph>My name is Matthew Stanciu, and I’m a 16 year old high school junior at the West Lafayette
                  Junior/Senior High School in West Lafayette, Indiana.<br/><br/>

                  When I was 6 years old, my mom gave me an old laptop
                  from her workplace that nobody used anymore. Instead of getting rid of it, it became my own computer,
                  giving me complete admin privileges. I quickly filled it with viruses, but
                  I continued to use it until the screen burned out. When it finally did, my mom found two more old laptops
                  and gave them to me. I eventually broke those as well. This was such an important time in
                  my life because I learned that I loved how computers worked and that I wanted to keep learning
                  how they work. <br/><br/>

                  I have always been passionate about writing as well. I wrote countless imaginative short stories throughout
                  my childhood, and when I was in 4th grade, I wrote a book called The Power Necklace
                  (which is still published online today). I have spent much of my life writing and playing with computers
                  since then. <br/><br/>

                  I learned to code on Codecademy when I was 11, but I always longed to be a part of something bigger; to
                  do real things and make a real difference with what I had learned.
                  So, when I was almost 12, in December 2013, I started
                  my first Minecraft server called MCFun Central and began learning how to make Minecraft server plugins. MCFun
                  Central was all about having fun, but my ultimate goal was to create a personalized environment for every
                  player so that they always felt at home. It sounds silly, but running my Minecraft server and making ny own plugins was
                  the first time I ever felt like I could make a real difference with code.<br/><br/>

                  MCFun Central turned into <Link target="_" href="https://extrillius.wordpress.com/" color="#afaeae">The Extrillius Network</Link> in January 2015,
                  a project that really took my original vision to the sky’s limit with a more dedicated staff team and ambitious goals of making almost all custom plugins.
                  I kept Extrillius going for two years before shutting it down, and in that time, I learned so much more about
                  programming, project management, and effective communication. <br/><br/>

                  After Extrillius, I went on to learn as much as I could about many interesting topics, including blockchain,
                  web development (which I had been wanting to get into for a very long time), and a little bit of machine learning.
                  I have now combined my two passions by running a <Link target="_" href="https://hackclub.com" color="red">Hack Club</Link> at my school, as well as a new school
                  publication, <Link target="_" href="http://sideb.media" color="#CA4A3B">Side B</Link>. I’m passionate about spreading computer science to everyone and
                  facilitating social change through organizing community projects and events like hackathons. <br/><br/>

                  I love my life and what I do, and I hope I can do great things in the future.</Paragraph>
              </Fade>
            </HeaderBlock>
          </CenteredHeaderBlock>
        </CenteredBox>
      </SmallerWrapper>
    <Fade>
      <SmallerWrapper>
        <CenteredBox>
          <Box width={[350, 500]}>
            <Subhead>My Positions</Subhead>
            <Project width={[350, 500]} href="https://wl.hackclub.com" title="WL Hack Club President" desc="WL Hack Club is West Lafayette Jr/Sr High School's Hack Club. Students get together in hackathon-like meetings and learn to code by making amazing projects." />
            <Project width={[350, 500]} href="http://sideb.media" title="Side B President" desc="Side B is a new club and student publication at my high school which aims to give every student a voice and become a better writer through a strong local community and the freedom to write whatever they want."/>
            <Project width={[350, 500]} href="https://codeday.org/indy" title="CodeDay Indy Regional Manager" desc="CodeDay is a fun, nationwide hackathon aimed toward beginners that gets students from all different backgrounds interested in coding. I'm in charge of putting CodeDay Indy together." />
            <Project width={[350, 500]} href="#" title="LafayetteHacks Lead Organizer" desc="LafayetteHacks is an upcoming high school hackathon aiming to strengthen the local coding community among the amazingly bright students in Lafayette, Indiana." />
            <Project width={[350, 500]} href="https://hackpenn.com" title="HackPennsylvania Community and Marketing" desc="HackPennsylvania is an upcoming high school hackathon that spans across Pennsylvania and connects students who have previously not had an opportunity like this. I'm working on marketing and outreach for the event." />
            <Project width={[350, 500]} href="https://altheamesh.com" title="AltheaMesh West Lafayette Ambassador" desc="Althea aims to give local communities the power to provide Internet to themselves through a cryptocurrency-powered mesh network. I am in charge of deploying an Althea network in West Lafayette." />
            <ProjectFinish width={[350, 500]} href="http://tedxwlhs.vision" title="TEDxWestLafayetteHS Organizer" desc="Two years ago, TEDxWestLafayetteHS was organized here by a few passionate students. This March, I'm working to bring it back. We're still currently waiting on our application to be approved, so check back soon!" />
          </Box>
        </CenteredBox>
      </SmallerWrapper>
      <Break />
      <Footer>
        Made with ❤️ by Matthew Stanciu<br/><br/>
        <Link target="_" href="https://github.com/MatthewStanciu/site" color="white">View on GitHub</Link>
      </Footer>
    </Fade>
  </React.Fragment>
)

const Hello = Heading.extend.attrs({m: 0, fontSize: 70, textAlign: "left"})`
  position: relative;
  left: -6px;
  ${mx[0]} {
    left: 0px;
  }
  line-height: 1.5;
  color: white;
  font-family: 'Averta-Bold';
`
const SmallerHello = Heading.extend.attrs({fontSize: 45, mr: 3, textAlign: "center", ml: [-60, 210], mr: [-60, 240]})`
  line-height: 1.5;
  color:white;
  font-family: 'Averta-Bold';
`
const Subhead = Heading.extend.attrs({f: 6, m: 0, fontSize: 30, textAlign: "center"})`
  line-height: 2;
  color: white;
  font-family: 'Averta-Bold';
`
const Left = Flex.extend.attrs()`
  position: relative;
  left: -25px;
  ${mx[0]} {
    left: -7px;
  }
`
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`

export const Break = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 5vh;
    text-align: left;
  }
`

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const CenteredHeaderBlock = Column.extend.attrs({ py: 2 })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
