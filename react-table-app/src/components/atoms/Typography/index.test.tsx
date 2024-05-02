import { render } from '@testing-library/react'
import Typography from '.'

describe('Typography component', () => {
  it('renders the text correctly', () => {
    const { getByText } = render(
      <Typography variant="body1" data-testid="typography">
        Create your PocketPay account
      </Typography>
    )
    const textElement = getByText('Create your PocketPay account')
    expect(textElement).toBeInTheDocument()
  })

  it('applies the styles and data-testid attribute', () => {
    const { getByTestId } = render(
      <Typography variant="body1" align="center" data-testid="typography">
        PocketPay
      </Typography>
    )

    const typographyElement = getByTestId('typography')
    expect(typographyElement).toHaveStyle('text-align: center;')
    expect(typographyElement).toHaveClass('MuiTypography-root')
    expect(typographyElement).toHaveClass('MuiTypography-body1')
  })
})
