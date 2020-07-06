import { FC } from 'react'
import Layout from '../components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Button, Flex, Heading, Box, Text } from 'rebass'
import Divider from '../components/Divider'

const Home: FC = () => {
  return (
    <Layout
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}>
      <Flex flexDirection='row' alignItems='center'>
        <Flex flexDirection='column'>
          <Heading fontSize={4}>Nextjs typescript MDX</Heading>
          <Button
            sx={{ background: 'linear-gradient(to right, darkviolet, blue)', boxShadow: 'small' }}
            my='12px'
            fontSize={13}>
            View Our Documentation
          </Button>
        </Flex>

        <Divider direction='column' sx={{ minHeight: '200%' }} css={css`
          margin: 0 40px;
        `} />

        <Flex flexDirection='column'>
          <Text my='2' fontWeight='bold'>1. Hello world MDX example.</Text>
          <Text my='2' fontWeight='bold'>2. Syntax highlight.</Text>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home
