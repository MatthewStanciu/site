import React from "react";
import styled from 'styled-components'
import Helmet from 'react-helmet'

var background = {backgroundColor: '#000000'}

export default () => (
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
)
