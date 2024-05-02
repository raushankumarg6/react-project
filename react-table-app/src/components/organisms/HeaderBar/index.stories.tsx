import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import HeaderBar from '.'

export default {
  title: 'Organisms/HeaderBar',
  component: HeaderBar,
} as Meta

const Template: StoryFn<typeof HeaderBar> = (args) => <HeaderBar {...args} />

export const headerBar = Template.bind({})
headerBar.args = {
  onClickCapOne: action('Clicked!!'),
}
