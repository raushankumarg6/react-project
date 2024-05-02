import { useState } from 'react'
import { Box, Popover as MuiPopover, Stack } from '@mui/material'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import { OptionItem } from '../../../utils/@types/index.d'
import Button from '../../atoms/Button'

interface PopoverProps {
  popOverButtonIcon: React.ReactNode
  popOverButtonText: React.ReactNode
  options: OptionItem[]
  onOptionClick: (option: OptionItem) => void
  popOverButtonStyle?: React.CSSProperties
}

const Popover = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleOptionClick = (option: OptionItem) => {
    props.onOptionClick(option)
    handleClose()
  }

  return (
    <Box>
      <Button
        style={props.popOverButtonStyle}
        onClick={handleClick}
        aria-describedby={id}
        endIcon={props.popOverButtonIcon}
      >
        {props.popOverButtonText}
      </Button>
      <MuiPopover
        anchorReference="anchorPosition"
        anchorPosition={{ top: 375, left: 1650 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Stack spacing={'1.5rem'}>
          {props.options.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              disabled={!option.enabled}
            >
              <Typography
                variant="body4"
                color={theme.palette.primaryColor[500]}
              >
                {option.label}
              </Typography>
            </Button>
          ))}
        </Stack>
      </MuiPopover>
    </Box>
  )
}

export default Popover
