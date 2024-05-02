import { Grid, Modal as MuiModal, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import theme from '../../../theme'

export interface ModalProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  isModalOpen: boolean
}

const StyledContainer = styled(Grid)({
  all: 'unset',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.palette.structuralColor.white,
  borderColor: theme.palette.structuralColor.background,
  borderRadius: '1rem',
  padding: '1.5rem',
})

const Modal = ({ children, isModalOpen }: ModalProps) => {
  const [open, setOpen] = useState(isModalOpen)

  useEffect(() => {
    setOpen(isModalOpen)
  }, [isModalOpen])

  const handleClose = () => setOpen(!open)

  return (
    <div data-testid="modal-container">
      <MuiModal open={open} onClose={handleClose} data-testid="modal">
        <StyledContainer data-testid="modal-content">
          {children}
        </StyledContainer>
      </MuiModal>
    </div>
  )
}

export default Modal
