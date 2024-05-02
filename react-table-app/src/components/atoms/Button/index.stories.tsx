import Button from '.'
import { ButtonProps as MuiButtonProps } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import theme from '../../../theme'
import { action } from '@storybook/addon-actions'
import Typography from '../Typography'
import chevronDownIcon from '../../../../public/assets/images/chevronDown.svg'
import downloadIcon from '../../../../public/assets/images/downloadIcon.svg'
import filterIcon from '../../../../public/assets/images/filterIcon.svg'

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
}

export default meta

const Template: StoryFn<MuiButtonProps> = (args) => <Button {...args} />

export const StartIconButton = Template.bind({})
StartIconButton.args = {
  variant: 'outlined',
  onClick: action('Button clicked'),
  startIcon: <img src={downloadIcon} alt="download-icon" />,
  children: <Typography variant="body3">Download report</Typography>,
}

export const EndIconButton = Template.bind({})
EndIconButton.args = {
  variant: 'contained',
  onClick: action('Button clicked'),
  endIcon: <img src={chevronDownIcon} alt="chevron-icon" />,
  children: (
    <Typography variant="body3" color={theme.palette.structuralColor.white}>
      Manage stackholders
    </Typography>
  ),
}

export const IconButton = Template.bind({})
IconButton.args = {
  startIcon: <img src={filterIcon} alt="filter-icon" />,
}
