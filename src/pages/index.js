import React from "react";
import '../style.css'
import { COLORS, BREAKPOINTS } from '../constants'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Paragraph from '../components/Paragraph'
import MaxWidthWrapper from '../components/MaxWidthWrapper'

var background = {backgroundColor: '#000000'}

export default () => (
  <Wrapper>
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
    <InnerWrapper>
      <Paragraph>Hiiiiii</Paragraph>
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 10px;
  background: black;
`

const InnerWrapper = styled(MaxWidthWrapper)`
  position: relative;
  padding: 40px 20px;
  color: '#fff';
`

const Title = styled.h1`
  margin-bottom: 48px;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: -2.4px;
  @media ${BREAKPOINTS.sm} {
    font-size: 3.5rem;
    letter-spacing: -1px;
  }
`

const Heading = styled.h2`
  margin-bottom: 3rem;
  font-size: 48px;
  letter-spacing: -1px;
`
