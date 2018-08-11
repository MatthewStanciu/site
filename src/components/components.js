import React from 'react'
import { Heading, Flex, Box, Link, Image, Text } from 'rebass'
import {mx} from '../reactstyle'
import { replace } from 'lodash';

export const Wrapper = Flex.extend.attrs({
  direction: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 80vh;
    text-align: left;
  }
`

export const Icon = ({
  name = 'x',
  fill = '#fff',
  ...props
}) => (
  <Image
    alt={`${name} icon`}
    src={`https://icon.now.sh/${name}/${42}/${replace(fill, '#', '')}`}
    style={{ width: 42, height: 42 }}
    {...props}
  />
)
export const NotNowIcon = ({
  name = 'x',
  fill = '#fff'
}) => (
  <Image
    src={`https://cdn.glitch.com/698488f3-b848-4b11-be98-9b7babb373a2%2FMedium.png?1533753316954`}
    style={{width: 42, height: 42}}
  />
)

export const SocialMedia = ({ href, icon, ...props }) => (
  <Link target="_blank" href={href} mx={3} {...props}>
    <Icon name={icon} fill={'#fff'} />
  </Link>
)
export const Medium = ({ href, ...props }) => (
  <Link target="_blank" href={href} mx={3} {...props}>
    <NotNowIcon fill={'#fff'} />
  </Link>
)

export const Project = ({title, desc, href, ...props}) => (
    <Link target="_blank" href={href} color="black" {...props}>
      <StyledBox width={350} p={3} color='white' bg='black' {...props}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDesc>{desc}</ProjectDesc>
      </StyledBox>
    </Link>
)
export const ProjectFinish = ({title, desc, href, ...props}) => (
  <Link target="_blank" color="black" href={href} {...props}>
    <StyledBoxFinish width={350} p={3} color='white' bg='black' {...props}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDesc>{desc}</ProjectDesc>
    </StyledBoxFinish>
  </Link>
)

export const ProjectTitle = Text.extend.attrs({fontSize: 25})`
  font-family: 'Averta-Bold';
  color: white;
  line-height: 1.2;
`
export const ProjectDesc = Text.extend.attrs({})`
  font-family: 'Averta';
  color: #b2b2b2;
  line-height: 1;
`

export const StyledBox = Box.extend.attrs({})`
  padding: 10% 0 10% 0;
  border-top:2px solid white;

`
export const StyledBoxFinish = Box.extend.attrs({})`
  padding: 10% 0 10% 0;
  border-top:2px solid white;
  border-bottom: 2px solid white;
`

export const Footer = Text.extend.attrs({py: 1, textAlign: 'center'})`
  font-family: 'Averta';
  color: white;
  line-height: 1;
`
