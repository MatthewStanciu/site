import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { COLORS } from '../constants'

injectGlobal`
  html {
    font-size: 16px;
  }
  body {
    line-height: 1.4;
  }
  a {
    color: #f40088;
  }
  ::selection {
    background-color: ${COLORS.lime[500]};
  }
`

export default ({ children }) => <div>{children()}</div>
