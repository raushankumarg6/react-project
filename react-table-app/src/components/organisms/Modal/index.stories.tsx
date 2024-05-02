import { Meta, StoryFn } from '@storybook/react'
import Modal, { ModalProps } from '.'
import Grid from '@mui/material/Grid'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import { Box } from '@mui/material'
import Button from '../../atoms/Button'

export default {
  title: 'Molecules/Modal',
  component: Modal,
} as Meta

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />

export const SampleModal = Template.bind({})

SampleModal.args = {
  children: (
    <Box sx={{ width: '35.21rem', height: '20.93rem' }}>
      <Grid
        style={{
          marginTop: '3.75rem',
          marginLeft: '2.5rem',
        }}
        item
      >
        <Typography variant="body1" color={theme.palette.textColor.medemp}>
          We’ll apply this rate if we receive <br /> your money today.
        </Typography>
      </Grid>
      <Grid
        style={{
          marginTop: '8.5rem',
          marginLeft: '13.1rem',
        }}
        item
      >
        <Button
          variant="contained"
          style={{
            width: '135px',
            height: '56px',
            borderRadius: '3.5rem',
            marginLeft: '2rem',
            color: 'white',
            backgroundColor: theme.palette.primaryColor[500],
          }}
        >
          <Typography
            variant="body2"
            color={theme.palette.structuralColor.white}
          >
            OK
          </Typography>
        </Button>
      </Grid>
    </Box>
  ),
  isModalOpen: true,
}
