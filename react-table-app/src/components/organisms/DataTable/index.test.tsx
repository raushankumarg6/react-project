import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import DataTable from '.'

// Mock the getDataByURL function
jest.mock('../../../services', () => ({
  getDataByURL: jest.fn(() => Promise.resolve({ data: [] })),
}))

// Define test data
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
]
const path = '/stakeholder'
const searchTerm = 'John'

test('renders loading indicator initially and data grid after loading', async () => {
  render(
    <DataTable
      path={path}
      searchTerm={searchTerm}
      columns={columns}
      style={{}}
    />
  )

  // Loading indicator should be visible initially
  const loadingIndicator = screen.getByTestId('loading-indicator')
  expect(loadingIndicator).toBeInTheDocument()

  //   // Wait for the loading to finish
  //   await waitFor(() => {
  //     expect(loadingIndicator).not.toBeInTheDocument()
  //   })

  // Data grid should be visible after loading
  const dataGrid = screen.getByTestId('datagrid-id')
  expect(dataGrid).toBeInTheDocument()
})

test('filters data based on the search term', async () => {
  const sampleData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]

  // Mock the response data
  require('../../../services').getDataByURL.mockResolvedValueOnce({
    data: sampleData,
  })

  render(
    <DataTable
      path={path}
      searchTerm={searchTerm}
      columns={columns}
      style={{}}
    />
  )

  //   // Wait for the loading to finish
  //   await waitFor(() => {
  //     expect(screen.getByTestId('loading-indicator')).not.toBeInTheDocument()
  //   })

  // Data grid should contain both rows initially
  expect(screen.getByText('John Doe')).toBeInTheDocument()
  expect(screen.getByText('Jane Smith')).toBeInTheDocument()

  // Enter a search term in the input field
  const searchInput = screen.getByPlaceholderText('Search...')
  fireEvent.change(searchInput, { target: { value: 'John' } })

  // Data grid should only contain rows matching the search term
  expect(screen.getByText('John Doe')).toBeInTheDocument()
  expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
})

// Add more test cases as needed
