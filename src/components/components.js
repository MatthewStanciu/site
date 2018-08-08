import React from 'react'
import { Heading, Flex, Link, Image, Text } from 'rebass'
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
export const Medium = ({href, ...props}) => (
  <Link target="_blank" href={href} mx={3} {...props}>
    <NotNowIcon fill={'#fff'} />
  </Link>
)

export const Footer = Text.extend.attrs({py: 1, textAlign: 'center'})`
  font-family: 'Averta';
  color: white;
  line-height: 1;
`
