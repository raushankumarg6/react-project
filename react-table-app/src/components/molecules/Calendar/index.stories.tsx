import { Meta, StoryFn } from '@storybook/react'
import Calender, { DatePickerCompProps } from '.'
import { action } from '@storybook/addon-actions'
const meta: Meta = {
  component: Calender,
  title: 'Molecules/Calender',
}

export default meta

const TEMPLATE: StoryFn<DatePickerCompProps> = (args) => <Calender {...args} />

export const Default = TEMPLATE.bind({})
Default.args = {
  onChange: action('date changed'),
}
