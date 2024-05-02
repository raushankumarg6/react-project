import { render } from '@testing-library/react'
import Radio from '.'

describe('RadioButton component', () => {
  test('should render the RadioButton component', () => {
    const { getByRole } = render(<Radio />)
    const radioButton = getByRole('radio')
    expect(radioButton).toBeInTheDocument()
  })
})
