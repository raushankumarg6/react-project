import {
  TextField as MuiTexField,
  TextFieldProps as MuiTextFieldProps,
  styled,
} from '@mui/material'
import React from 'react'

const StyledTextField = styled(MuiTexField)({
  display: 'flex',
  height: '1.75rem',
})
const TextField = (props: MuiTextFieldProps) => {
  return (
    <StyledTextField
      autoComplete="off"
      inputProps={{ maxLength: 70 }}
      {...props}
    />
  )
}

export default React.memo(TextField)
