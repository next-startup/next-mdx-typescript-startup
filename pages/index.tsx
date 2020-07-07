import { FC } from 'react'
import Layout from '../components/Layout'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Button, Flex, Heading, Box, Text } from 'rebass'
import Divider from '../components/Divider'
import { GetStaticProps } from 'next'
import { getPaths } from '../lib/mdx'
import Link from 'next/link'

const Home: FC<StaticProps> = ({ mdxPaths }) => {
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
            sx={{ background: 'linear-gradient(to right, aquamarine, turquoise)', boxShadow: 'small' }}
            my='12px'
            fontSize={13} color='black' fontWeight='bold'>
            View Our Documentation
          </Button>
        </Flex>

        <Divider direction='column' sx={{ minHeight: '200%' }} css={css`
          margin: 0 40px;
        `} />

        <Flex flexDirection='column'>
          {
            mdxPaths.map((path, index)=><Link key={path} href={path}>
              <Text sx={{
                '&:hover': {
                  cursor: 'pointer'
                },
                fontStyle: 'italic'
              }} my='2' fontWeight='bold' color='teal' fontSize={6}>{index+1} - {path}.mdx</Text>
            </Link>)
          }
        </Flex>
      </Flex>
    </Layout>
  )
}

interface StaticProps {
  mdxPaths: Array<string>
}

export const getStaticProps: GetStaticProps<StaticProps> = async ()=>{

  const paths = await getPaths()

  return {
    props: {
      mdxPaths: paths
    }
  }
}

export default Home
