import { fireEvent, render, screen } from '@testing-library/react'
import Calender from '.'

describe('Calendar', () => {
  test('render date picker ', () => {
    render(<Calender />)
    const date = screen.getByLabelText('Choose date')
    expect(date).toBeInTheDocument()
    fireEvent.click(date)
    expect(screen.getByText('SUN')).toBeInTheDocument()
  })
})
