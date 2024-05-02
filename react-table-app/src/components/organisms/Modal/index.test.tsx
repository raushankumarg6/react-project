import { fireEvent, render, screen } from '@testing-library/react'
import Modal from '.'

describe('Modal', () => {
  it('renders modal content when isModalOpen is true', () => {
    render(
      <Modal isModalOpen={true}>
        <div>Modal Content</div>
      </Modal>
    )

    const modalContent = screen.getByTestId('modal-content')
    expect(modalContent).toBeInTheDocument()
    expect(modalContent.textContent).toBe('Modal Content')
  })

  it('does not render modal content when isModalOpen is false', () => {
    render(
      <Modal isModalOpen={false}>
        <div>Modal Content</div>
      </Modal>
    )

    const modalContent = screen.queryByTestId('modal-content')
    expect(modalContent).not.toBeInTheDocument()
  })

  it('closes the modal when clicking outside', () => {
    render(
      <Modal isModalOpen={true}>
        <div>Modal Content</div>
      </Modal>
    )

    const modalContent = screen.getByText('Modal Content')
    const modalBackdrop = document.querySelector(
      '.MuiBackdrop-root'
    ) as HTMLElement
    fireEvent.click(modalBackdrop)

    expect(modalContent).not.toBeInTheDocument()
  })
})
