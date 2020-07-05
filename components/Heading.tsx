import { Heading as CompHeading, HeadingProps } from "rebass"
import { FC } from 'react'

interface Props extends HeadingProps{
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: FC<Props> = ({variant, children, ...props})=><CompHeading children={children} {...props}/>

export default Heading
