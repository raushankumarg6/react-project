import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NavigationBar from '.'

export default {
  title: 'Organisms/NavigationBar',
  component: NavigationBar,
} as Meta

const Template: StoryFn<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
)

export const navigationBar = Template.bind({})
navigationBar.args = {
  onClickStakeholderOption: action('Clicked!!'),
}
