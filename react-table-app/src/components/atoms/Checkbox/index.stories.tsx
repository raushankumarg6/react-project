import { CheckBox } from '.'
import { Meta, StoryFn } from '@storybook/react'
import { CheckboxProps } from '@mui/material'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'Atoms/CheckBox',
  component: CheckBox,
}
export default meta

const Template: StoryFn<CheckboxProps> = (args) => <CheckBox {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Clickable = Template.bind({})
Clickable.args = {
  onClick: action('Checkbox clicked'),
}
