import React from 'react'
import { Heading, Flex, Link, Image } from 'rebass'
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
  fill = colors.white,
  size = 32,
  ...props
}) => (
  <Image
    alt={`${name} icon`}
    src={`https://icon.now.sh/${name}/${size}/${replace(fill, '#', '')}`}
    style={{ width: size, height: size }}
    {...props}
  />
)

export const Service = ({ href, icon, ...props }) => (
  <Link target="_blank" href={href} mx={2} {...props}>
    <Icon name={icon} fill={'#fff'} />
  </Link>
)
