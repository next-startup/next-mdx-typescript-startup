import { FC } from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import { ThemeProvider } from 'emotion-theming'
import theme from '../components/theme'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'

const components: MDXProviderComponentsProp = {
  wrapper: Layout,
  code: CodeBlock
}

const App: FC<AppPropsType> = ({Component, pageProps}) => {

  return(
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </MDXProvider>
  )
}

export default App
