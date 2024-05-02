import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // for additional matchers
import HeaderBar from '.'

describe('HeaderBar', () => {
  const mockClick = jest.fn()
  it('renders without errors', () => {
    render(<HeaderBar onClickCapOne={mockClick} />)

    expect(screen.getByText('Accounts')).toBeInTheDocument()
    expect(screen.getByText('Meetly')).toBeInTheDocument()
    expect(screen.getByText('Task')).toBeInTheDocument()
    expect(screen.getByText('Downloads')).toBeInTheDocument()
  })

  it('calls onClickCapOne when CapOne button is clicked', () => {
    const onClickCapOneMock = jest.fn()
    render(<HeaderBar onClickCapOne={onClickCapOneMock} />)

    fireEvent.click(screen.getByAltText('capone-logo'))
    expect(onClickCapOneMock).toHaveBeenCalled()
  })
})
