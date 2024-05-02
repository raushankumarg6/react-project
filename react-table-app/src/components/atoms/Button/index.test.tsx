import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  test('renders button with text', () => {
    const { getByText } = render(<Button>Click me!</Button>)
    const buttonElement = getByText('Click me!')
    expect(buttonElement).toBeInTheDocument()
  })

  test('applies the "contained" variant when specified', () => {
    const { getByText } = render(<Button variant="contained">Click me!</Button>)
    const buttonElement = getByText('Click me!')
    expect(buttonElement).toHaveClass('contained')
  })
})
