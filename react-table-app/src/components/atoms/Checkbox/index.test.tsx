import { render } from '@testing-library/react'
import { CheckBox } from '.'

describe('CheckBox component', () => {
  test('should render the CheckBox component', () => {
    const { getByRole } = render(<CheckBox />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })
})
