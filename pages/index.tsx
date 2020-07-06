import { FC } from 'react'
import Layout from '../components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Button, Flex, Heading } from 'rebass'
import Divider from '../components/Divider'

const Home: FC = () => {
  return(
    <Layout css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}>
      <Flex flexDirection='row' alignItems='center'>
        <Heading fontSize={4}>Nextjs typescript MDX</Heading>
        <Divider direction='column' sx={{ minHeight: '200%' }} />
      </Flex>
    </Layout>
  )
}

export default Home
