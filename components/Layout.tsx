import { FC, CSSProperties } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from 'next/head'
import { description } from '../package.json'

type Meta = {
  name: string
  content: string
}

interface Props {
  title?: string
  metas?: Meta[]
  style?: CSSProperties
}

const initMetas: Array<Meta> = [
  {
    name: 'description',
    content: description
  }
]

const Layout: FC<Props> = ({
  title = 'Next App',
  metas = initMetas,
  children,
  ...props
}) => {
  return (
    <main
      css={css`
        max-width: 800px;
        margin: 0 auto;
        height: 100%;
      `}
      {...props}>
      <Head>
        <title>{title}</title>
        {metas.map(meta => (
          <meta key={meta.name} name={meta.name} content={meta.content} />
        ))}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </main>
  )
}

export default Layout
