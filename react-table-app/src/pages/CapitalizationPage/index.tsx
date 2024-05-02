import { useState } from 'react'
import HomeTemplate from '../../components/templates/Home'
import Typography from '../../components/atoms/Typography'
import HeaderBar from '../../components/organisms/HeaderBar'
import { Grid, InputAdornment, Stack, styled } from '@mui/material'
import NavigationBar from '../../components/organisms/NavigationBar'
import theme from '../../theme'
import TextField from '../../components/atoms/TextField'
import SEARCH from '../../../public/assets/images/searchIcon.svg'
import CHEVRONDOWN from '../../../public/assets/images/dropDownIcon.svg'
import PROGRESS from '../../../public/assets/images/progress.svg'
import CALENDAR from '../../../public/assets/images/calendarIcon.svg'
import DataTable from '../../components/organisms/DataTable'
import { CapitalizationColumn } from '../../utils/@types/index.d'
import { CAPITALIZATION_FIELDS } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/atoms/Button'

const CapitalizationDataWithSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <Grid container>
      <Grid item>
        <Stack width={'98vw'} spacing={'1.5rem'}>
          <Typography
            variant="heading1"
            color={theme.palette.textColor.highemp}
          >
            Capitalization
          </Typography>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <TextField
              label="Search"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={SEARCH} alt="search-icon" />
                  </InputAdornment>
                ),
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Stack
              direction={'row'}
              style={{ border: '0.5px solid grey', borderRadius: '0.25rem' }}
            >
              <Button endIcon={<img src={CHEVRONDOWN} alt="chevron-down" />}>
                <Typography color={theme.palette.textColor.lowemp}>
                  Last 7 days
                </Typography>
              </Button>
              <Button startIcon={<img src={CALENDAR} alt="calendar" />}>
                <Typography color={theme.palette.textColor.lowemp}>
                  May 28-Jun 3
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid sx={{ marginTop: '3rem' }} item>
        <Stack spacing={'1.5rem'}>
          <img src={PROGRESS} width={'100%'} alt="progress-icon" />
          <DataTable
            path="/capitalization"
            columns={CapitalizationColumn}
            searchTerm={searchTerm}
            showCheckbox={false}
            searchFields={CAPITALIZATION_FIELDS}
            style={{ width: '99vw' }}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

const HeadarStack = styled(Stack)({
  marginBottom: '1.5rem',
})

const CapitalizationDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <HomeTemplate
      headerNode={
        <HeadarStack spacing={'1rem'}>
          <HeaderBar onClickCapOne={() => console.log('Logo clicked')} />
          <NavigationBar
            onClickStakeholderOption={() => navigate('/')}
            onClickCapitalizationOption={() => navigate('/capitalization')}
          />
        </HeadarStack>
      }
      contentNode={<CapitalizationDataWithSearchBar />}
    />
  )
}

export default CapitalizationDetailsPage
