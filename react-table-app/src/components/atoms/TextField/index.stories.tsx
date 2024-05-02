import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextFieldComp from '.'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'
const meta: Meta = {
  component: TextFieldComp,
  title: 'Atoms/TextField',
}
export default meta

const TEMPLATE: StoryFn = (args: MuiTextFieldProps) => (
  <TextFieldComp {...args} />
)
export const Default = TEMPLATE.bind({})
Default.args = {
  value: '',
  label: 'email',
  placeholder: 'enter email',
  onchange: action('changed the value'),
}
