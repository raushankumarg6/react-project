import { Box, Grid, Stack, styled } from '@mui/material'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import dropDownIcon from '../../../../public/assets/images/dropDownIcon.svg'
import capOneIcon from '../../../../public/assets/images/capOneIcon.svg'
import profileIcon from '../../../../public/assets/images/user.svg'
import theme from '../../../theme'

interface HeaderBarProps {
  onClickCapOne: () => void
}

const ParentContainer = styled(Grid)({
  backgroundColor: theme.palette.greyColor.stroke2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100vw',
})

const HeaderBar = (props: HeaderBarProps) => {
  return (
    <ParentContainer container>
      <Grid item>
        <Stack direction={'row'} spacing={'1.25rem'}>
          <Button
            onClick={props.onClickCapOne}
            startIcon={<img src={capOneIcon} alt="capone-logo" />}
          />
          <Box>
            <Button>
              <Typography
                variant="caption1"
                color={theme.palette.textColor.lowemp}
              >
                Accounts
              </Typography>
            </Button>
            <Button endIcon={<img src={dropDownIcon} alt="drop-down-icon" />}>
              <Typography
                variant="caption1"
                color={theme.palette.textColor.highemp}
              >
                Meetly
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction={'row'} spacing={'1rem'}>
          <Button>
            <Typography
              variant="caption1"
              color={theme.palette.textColor.highemp}
            >
              Task
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="caption1"
              color={theme.palette.textColor.highemp}
            >
              Downloads
            </Typography>
          </Button>
          <Button startIcon={<img src={profileIcon} alt="profile-icon" />} />
        </Stack>
      </Grid>
    </ParentContainer>
  )
}

export default HeaderBar
