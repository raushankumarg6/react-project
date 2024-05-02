import { Divider, Grid, Stack, styled } from '@mui/material'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import React, { useState } from 'react' // Import useState
import { getNavigationBarOption } from '../../../utils/constant'
import theme from '../../../theme'

interface NavigationBarProps {
  onClickStakeholderOption: () => void
  onClickCapitalizationOption: () => void
}

const OptionStack = styled(Stack)({
  marginBottom: '1rem',
})

const OptionButton = styled(Button)<{ active: boolean }>(({ active }) => ({
  padding: '2px 10px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '2.5rem',
  backgroundColor: active
    ? theme.palette.primaryColor[500]
    : theme.palette.structuralColor.white,
  ':hover': {
    backgroundColor: active
      ? theme.palette.primaryColor[500]
      : theme.palette.structuralColor.white,
  },
}))

const OptionTypography = styled(Typography)<{ active: boolean }>(
  ({ active }) => ({
    color: active
      ? theme.palette.structuralColor.white
      : theme.palette.textColor.highemp,
  })
)

const NavigationBar = (props: NavigationBarProps) => {
  const navigationOptions = getNavigationBarOption(
    props.onClickStakeholderOption,
    props.onClickCapitalizationOption
  )

  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (name: string, onClick: () => void) => {
    setActiveButton(name)
    onClick()
  }

  return (
    <Grid direction={'column'} container>
      <OptionStack direction={'row'} spacing={'1.5rem'}>
        {navigationOptions.map((option) => (
          <OptionButton
            key={option.name}
            disabled={!option.isActive}
            onClick={() => handleButtonClick(option.name, option.onClick)}
            active={option.name === activeButton}
          >
            <OptionTypography
              variant="body4"
              active={option.name === activeButton}
            >
              {option.name}
            </OptionTypography>
          </OptionButton>
        ))}
      </OptionStack>
      <Divider />
    </Grid>
  )
}

export default NavigationBar
