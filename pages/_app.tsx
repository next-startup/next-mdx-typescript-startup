import { FC } from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import { ThemeProvider } from 'emotion-theming'
import theme from '../components/theme'

const App: FC<AppPropsType> = ({Component, pageProps}) => {
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default App
