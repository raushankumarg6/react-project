import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import TextField from '.'

describe('textfield test cases', () => {
  test('rendering of textfield', () => {
    render(<TextField label="enter name" />)

    const input = screen.getByLabelText('enter name')
    fireEvent.change(input, {
      target: {
        value: 'abc@gmail.com',
      },
    })

    waitFor(() => {
      screen.getByText('abc@gmail.com')
    })
  })
})
