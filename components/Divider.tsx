import { FC } from 'react'
import { Box, SxProps } from 'rebass'

interface Props {
  thickness?: number,
  direction?: 'row' | 'column'
}

const Divider: FC<Props & SxProps> = ({thickness=1, direction='row', ...props}) => {
  return(
    direction==='column' ? <Box backgroundColor='divider' width={thickness+'px'} height='100%' mx='3' {...props} />
    : <Box backgroundColor='divider' width='100%' height={thickness+'px'} my='3' {...props} />
  )
}

export default Divider
