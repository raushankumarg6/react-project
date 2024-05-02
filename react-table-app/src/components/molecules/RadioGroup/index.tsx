import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
  Stack,
  styled,
} from '@mui/material'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'

interface RadioGroupProps {
  radioGroupLabel: string
  defaultValue: string
  labels: string[]
  selectedValue: string
  onValueChange: (value: string) => void
}

const RadioBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
})

const HeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '8px',
})

const RadioGroup = (props: RadioGroupProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value
    props.onValueChange(selectedValue)
  }

  return (
    <FormControl>
      <MuiRadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.defaultValue}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <RadioBox>
          <Stack direction={'row'} spacing={'1.3rem'}>
            <HeaderBox>
              <Typography
                variant="body4"
                color={theme.palette.textColor.highemp}
              >
                {props.radioGroupLabel}
              </Typography>
              <Typography color={'red'}>*</Typography>
            </HeaderBox>
            {props.labels.map((label) => (
              <FormControlLabel
                key={label}
                value={label.toLowerCase()}
                control={<Radio />}
                label={
                  <Typography
                    variant="body4"
                    color={theme.palette.textColor.highemp}
                  >
                    {label}
                  </Typography>
                }
              />
            ))}
          </Stack>
        </RadioBox>
      </MuiRadioGroup>
    </FormControl>
  )
}

export default RadioGroup
