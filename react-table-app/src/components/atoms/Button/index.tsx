import { Box, Button as MuiButton, ButtonProps, styled } from '@mui/material'
import theme from '../../../theme'

const Button = ({ children, variant, onClick, ...props }: ButtonProps) => {
  const StyledBox = styled(Box)({
    '.MuiButton-root': {
      color: theme.palette.structuralColor.white,
      textTransform: 'none',
    },
    '.contained': {
      backgroundColor: theme.palette.primaryColor[500],
      '&.Mui-disabled ': {
        backgroundColor: theme.palette.primaryColor[100],
      },
      ':hover': {
        backgroundColor: theme.palette.primaryColor[500],
      },
    },
    '.outlined': {
      border: `1px solid ${theme.palette.greyColor.stroke}`,
      color: theme.palette.textColor.medemp,
    },
    '.text': {
      color: theme.palette.textColor.highemp,
    },
  })

  return (
    <StyledBox
      sx={{
        display: 'inline',
      }}
    >
      <MuiButton
        {...props}
        className={variant + ' ' + props.className}
        disableFocusRipple
        disableRipple
        onClick={onClick}
      >
        {children}
      </MuiButton>
    </StyledBox>
  )
}

export default Button
