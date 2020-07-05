import { FC } from 'react'
import { Global } from '@emotion/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { normalize } from 'polished'

const style = css`
  ${normalize()};
  html,body {
    height: 100%;
  }
  body>* { height: 100%; }
`

const GlobalStyle: FC = () => {
  return(
    <Global styles={style} />
  )
}

export default GlobalStyle
