import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // for additional matchers
import { getNavigationBarOption } from '../../../utils/constant'
import NavigationBar from '.'

describe('NavigationBar', () => {
  const onClickStakeholderOptionMock = jest.fn()

  it('renders navigation options', () => {
    render(<NavigationBar onClickStakeholderOption={() => {}} />)

    // Check if the component renders the options
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onClickStakeholderOption when an active option is clicked', () => {
    render(
      <NavigationBar onClickStakeholderOption={onClickStakeholderOptionMock} />
    )

    fireEvent.click(screen.getByText('Option 1'))

    expect(onClickStakeholderOptionMock).toHaveBeenCalled()
  })

  it('does not call onClickStakeholderOption when an inactive option is clicked', () => {
    render(
      <NavigationBar onClickStakeholderOption={onClickStakeholderOptionMock} />
    )

    fireEvent.click(screen.getByText('Option 2'))

    expect(onClickStakeholderOptionMock).not.toHaveBeenCalled()
  })
})
