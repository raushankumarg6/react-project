import { useState } from 'react'
import { Box, Grid, InputAdornment, Stack, styled } from '@mui/material'
import DataTable from '../../components/organisms/DataTable'
import Typography from '../../components/atoms/Typography'
import theme from '../../theme'
import Button from '../../components/atoms/Button'
import DOWNLOAD from '../../../public/assets/images/downloadIcon.svg'
import SEARCH from '../../../public/assets/images/searchIcon.svg'
import FILTER from '../../../public/assets/images/filterIcon.svg'
import TextField from '../../components/atoms/TextField'
import StakeHolderModal from '../../components/organisms/StakeHolderModal'
import HomeTemplate from '../../components/templates/Home'
import NavigationBar from '../../components/organisms/NavigationBar'
import HeaderBar from '../../components/organisms/HeaderBar'
import Popover from '../../components/molecules/Popover'
import CHEVRON_DOWN from '../../../public/assets/images/chevronDown.svg'
import {
  ADD_STAKEHOLDER,
  STAKEHOLDER_FIELDS,
  STAKEHOLDER_OPTION,
} from '../../utils/constant'
import {
  ModalPurpose,
  OptionItem,
  StackHolderRowType,
  getStakeHolderColumns,
} from '../../utils/@types/index.d'
import { useNavigate } from 'react-router-dom'

const SearchFilterBox = styled(Box)({
  display: 'flex',
  alignItems: 'baseline',
  marginTop: '1.5rem',
})

const StyledButton = styled(Button)({
  border: '1px solid gray',
  borderRadius: '0.25rem',
})

const StakeholderDataWithSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  const [modalPurpose, setModalPurpose] = useState<ModalPurpose>(
    ModalPurpose.Add
  )
  const [selectedStackHolder, setSelectedStackHolder] =
    useState<StackHolderRowType | null>(null)

  const handleRowClick = (row: StackHolderRowType) => {
    setSelectedStackHolder(row)
    setEditMode(!editMode)
    setModalPurpose(ModalPurpose.Edit)
  }

  const handleOptionClick = (option: OptionItem) => {
    if (option.label === ADD_STAKEHOLDER) {
      setModalPurpose(ModalPurpose.Add)
      setEditMode(!editMode)
    }
  }

  return (
    <Grid container spacing={'1.25rem'}>
      <Grid item container>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <Typography
              variant="heading1"
              color={theme.palette.textColor.highemp}
            >
              All stakeholders
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction={'row'} spacing={'0.5rem'}>
              <StyledButton
                startIcon={<img src={DOWNLOAD} alt="download-icon" />}
              >
                <Typography
                  variant="body3"
                  color={theme.palette.textColor.medemp}
                >
                  Download report
                </Typography>
              </StyledButton>
              <Popover
                options={STAKEHOLDER_OPTION}
                onOptionClick={handleOptionClick}
                popOverButtonIcon={
                  <img src={CHEVRON_DOWN} alt="chevron-down-icon" />
                }
                popOverButtonText={
                  <Typography
                    variant="body3"
                    color={theme.palette.structuralColor.white}
                  >
                    Manage stakeholders
                  </Typography>
                }
                popOverButtonStyle={{
                  backgroundColor: theme.palette.primaryColor[500],
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid item>
          <SearchFilterBox>
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
            <Button startIcon={<img src={FILTER} alt="FILTER-icon" />} />
          </SearchFilterBox>
        </Grid>
      </Grid>
      <Grid item>
        <DataTable
          path="/stakeholder"
          searchTerm={searchTerm}
          columns={getStakeHolderColumns(handleRowClick)}
          showCheckbox={true}
          searchFields={STAKEHOLDER_FIELDS}
          style={{ width: '99vw' }}
        />
        {editMode && (
          <StakeHolderModal
            path="/stakeholder"
            purposeOfModal={modalPurpose}
            stakeHolderId={selectedStackHolder?.id}
          />
        )}
      </Grid>
    </Grid>
  )
}

const HeadarStack = styled(Stack)({
  marginBottom: '1.5rem',
})

const StakeholderDetailsPage = () => {
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
      contentNode={<StakeholderDataWithSearchBar />}
    />
  )
}

export default StakeholderDetailsPage
