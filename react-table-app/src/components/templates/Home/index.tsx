import { Grid, styled } from '@mui/material'

interface HomeTemplateProps {
  headerNode: React.ReactNode
  contentNode: React.ReactNode
}

const HeaderGrid = styled(Grid)({
  top: 0,
  position: 'sticky',
})
const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <Grid container>
      <HeaderGrid item>{props.headerNode}</HeaderGrid>
      <Grid item>{props.contentNode}</Grid>
    </Grid>
  )
}

export default HomeTemplate
