import { Radio as MuiRadio, RadioProps, styled } from '@mui/material'
import theme from '../../../theme'

const StyledRadio = styled(MuiRadio)({
  '&.Mui-checked': {
    color: theme.palette.primaryColor[500],
  },
  '&.MuiSvgIcon-root': {
    width: '1.5rem',
    height: '1.5rem',
  },
})

const Radio = ({ onClick, ...props }: RadioProps) => {
  return (
    <StyledRadio
      disableRipple
      disableFocusRipple
      onClick={onClick}
      {...props}
    />
  )
}
export default Radio
