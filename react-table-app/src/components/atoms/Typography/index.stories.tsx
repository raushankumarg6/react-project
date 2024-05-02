import { TypographyProps } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import Typography from '.'
import theme from '../../../theme'

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />

export const headingTypography = Template.bind({})
headingTypography.args = {
  children: 'Create your PocketPay account',
  style: {
    ...theme.typography.heading1,
    color: theme.palette.textColor.highemp,
  },
}

export const body1Typography = Template.bind({})
body1Typography.args = {
  children: 'Sign in with Google',
  style: {
    ...theme.typography.body1,
    color: theme.palette.textColor.medemp,
  },
}

export const body3Typography = Template.bind({})
body3Typography.args = {
  children: 'Guaranteed rate (24 hrs):',
  style: {
    ...theme.typography.body3,
    color: theme.palette.textColor.lowemp,
  },
}

export const captionTypography = Template.bind({})
captionTypography.args = {
  children: 'Business activity',
  style: {
    ...theme.typography.caption1,
    color: theme.palette.textColor.medemp,
  },
}
