import { FC } from 'react'
import Layout from '../components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Button, Box, Flex } from 'rebass'
import Heading from '../components/Heading'

const Home: FC = () => {
  return(
    <Layout css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}>
      {/* <Heading fontSize='5'>Next MDX typescript startup template</Heading> */}
      <Heading></Heading>
    </Layout>
  )
}

export default Home
