import { Typography as MuiTypography, TypographyProps } from '@mui/material'

const Typography = (props: TypographyProps) => {
  return <MuiTypography data-testid="typography" {...props}></MuiTypography>
}
export default Typography
