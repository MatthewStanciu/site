import React from "react";
import '../style.css'
import styled from 'styled-components'
import Helmet from 'react-helmet'

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
      <Title>Hi, I'm Matthew.</Title>
      <Paragraph>Hiiiiii</Paragraph>
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 10px;
  background: black;
`

const Title = styled.h1`
  margin-bottom: 48px;
  font-family: 'Averta-Bold';
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: -2.4px;
  color: #fff;
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
