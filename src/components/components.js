import React from 'react'
import { Heading, Flex } from 'rebass'
import {mx} from '../reactstyle'

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
