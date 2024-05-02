import { Meta, StoryFn } from '@storybook/react'
import { RadioProps } from '@mui/material'
import { action } from '@storybook/addon-actions'
import Radio from '.'

const meta: Meta = {
  title: 'Atoms/RadioButton',
  component: Radio,
}
export default meta

const Template: StoryFn<RadioProps> = (args) => <Radio {...args} />

export const Radio_Button = Template.bind({})
Radio_Button.args = {}

export const CheckedState = Template.bind({})
CheckedState.args = {
  checked: true,
}

export const DisabledState = Template.bind({})
DisabledState.args = {
  disabled: true,
}

export const ClickableState = Template.bind({})
ClickableState.args = {
  onClick: action('RadioButton clicked'),
}
