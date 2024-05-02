import { Checkbox, CheckboxProps, styled } from '@mui/material'
import theme from '../../../theme'

const StyledCheckBox = styled(Checkbox)({
  '&.Mui-checked': {
    color: theme.palette.primaryColor[500],
  },
})

export const CheckBox = ({ onClick, ...props }: CheckboxProps) => {
  return (
    <StyledCheckBox
      {...props}
      disableRipple
      disableFocusRipple
      onClick={onClick}
    />
  )
}
