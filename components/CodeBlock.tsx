import { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'

interface Props {
  className: string
  children: string
  live: boolean
}

const CodeBlock: FC<Props> = ({className, children, live}) => {
  const language: Language = (live && className.replace(/language-/, '') || 'javascript') as Language

  if(live){
    return (
      <div>
        <LiveProvider code={children} theme={theme}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  return(
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps})=>(
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i)=>(
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key)=>(
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
