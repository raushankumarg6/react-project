import { useEffect, useState } from 'react'
import { Divider, Grid, Stack, styled } from '@mui/material'
import Modal from '../Modal'
import Typography from '../../atoms/Typography'
import TextField from '../../atoms/TextField'
import Calender from '../../molecules/Calendar'
import Button from '../../atoms/Button'
import INCREASE from '../../../../public/assets/images/add.svg'
import REDUCE from '../../../../public/assets/images/remove.svg'
import theme from '../../../theme'
import {
  changeToCustomDate,
  validateEmailFormat,
} from '../../../utils/utilityFunction'
import dayjs from 'dayjs'
import RadioGroup from '../../molecules/RadioGroup'
import {
  getDataByURLWithId,
  postDataByURL,
  updateDataByURL,
} from '../../../services'
import { ModalPurpose } from '../../../utils/@types/index.d'

interface StakeHolderModalProps {
  path: string
  stakeHolderId: number | undefined
  purposeOfModal: ModalPurpose
}

interface StakeholderDataType {
  name: {
    firstName: string
    lastName: string
  }
  contactEmail: string
  type: 'Individual' | 'Non-individual'
  taxId: string
  employeeId: string
  payRollId: string
  dob: string
  effectiveDate: string
  relationship: string
  address: string
  portfolioEmail: string
  costCenter: string
  ownership: number
}
const defaultStakeHolderData: StakeholderDataType = {
  name: {
    firstName: '',
    lastName: '',
  },
  contactEmail: '',
  type: 'Individual',
  taxId: '',
  employeeId: '',
  payRollId: '',
  dob: '',
  effectiveDate: '',
  relationship: '',
  address: '',
  portfolioEmail: '',
  costCenter: '',
  ownership: 0,
}

interface ErrorType {
  firstName: string
  lastName: string
  contactEmail: string
}

const defaultErrorData: ErrorType = {
  firstName: '',
  lastName: '',
  contactEmail: '',
}

const ScrollableContent = styled('div')({
  maxHeight: '80vh',
  overflowY: 'auto',
})

const FormGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  width: '35rem',
  padding: '1rem',
})
const RelationShipDetailsGrid = styled(Grid)({
  marginTop: '3rem',
})
const RelationShipDetailsStack = styled(Stack)({
  marginTop: '1rem',
})
const IdentificationStack = styled(Stack)({
  paddingTop: '1rem',
})
const AddressStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '1rem 0rem 1rem 0rem',
})

const BasicInfoGrid = styled(Grid)({
  marginBottom: '1.5rem',
})

const ActionStack = styled(Stack)({
  position: 'relative',
  marginTop: '4rem',
})

const StyledButton = styled(Button)({
  border: '1px solid grey',
})

const StakeHolderModal = (props: StakeHolderModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const [isAddress, setIsAddress] = useState<boolean>(false)
  const [errors, setErrors] = useState<ErrorType>(defaultErrorData)
  const [stakeHolderData, setStakeHolderData] = useState<StakeholderDataType>(
    defaultStakeHolderData
  )

  useEffect(() => {
    fetchData()
  }, [props.path])

  const fetchData = async () => {
    try {
      if (typeof props.stakeHolderId === 'number') {
        const response = await getDataByURLWithId(
          props.path,
          props.stakeHolderId
        )
        setStakeHolderData(response.data)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  const postData = async ({ id, ...stakeHolderData }: StakeholderDataType) => {
    try {
      const response = await postDataByURL('/stakeholder', stakeHolderData)
      console.log(response)
    } catch (error: any) {
      console.log(error)
    }
  }

  const handleUpdateStakeholder = async () => {
    try {
      if (typeof props.stakeHolderId === 'number') {
        const response = await updateDataByURL(
          `/stakeholder/${props.stakeHolderId}`,
          stakeHolderData
        )
        setIsModalOpen(!isModalOpen)
        console.log(response.status)
      }
    } catch (error) {
      console.error('Error while updating stakeholder:', error)
    }
  }

  const handleAddStakeholder = () => {
    postData(stakeHolderData)
    setIsModalOpen(!isModalOpen)
  }

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen)
  }

  const validateName = (fieldName: string, value: string) => {
    const alphabeticSpaceRegex = /^[A-Za-z\s]+$/

    if (!alphabeticSpaceRegex.exec(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${
          fieldName === 'firstName' ? 'First' : 'Last'
        } Name must contain only alphabetic characters.`,
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: '',
      }))
    }
  }

  const validateAndSetEmailError = (value: string) => {
    const isEmailValid = validateEmailFormat(value)
    if (!isEmailValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactEmail: 'Enter valid email',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactEmail: '',
      }))
    }
  }

  const handleInputChange = (name: string, value: string) => {
    if (name === 'firstName' || name === 'lastName') {
      validateName(name, value)
      setStakeHolderData((prevStakeHolderData) => ({
        ...prevStakeHolderData,
        name: {
          ...prevStakeHolderData.name,
          [name]: value.trim(),
        },
      }))
    } else if (name === 'contactEmail') {
      validateAndSetEmailError(value)
      setStakeHolderData((prevStakeHolderData) => ({
        ...prevStakeHolderData,
        [name]: value,
      }))
    } else {
      setStakeHolderData((prevStakeHolderData) => ({
        ...prevStakeHolderData,
        [name]: value,
      }))
    }
  }

  return (
    <Grid container>
      <Modal isModalOpen={isModalOpen}>
        <ScrollableContent>
          <FormGrid container>
            <Grid item spacing={'1rem'}>
              <Stack spacing={'0.7rem'}>
                <Typography>{props.purposeOfModal} stakeholder</Typography>
                <Divider />
                <Typography>Basic Information</Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction={'row'} spacing={'1rem'}>
                <RadioGroup
                  radioGroupLabel="Stakeholder type"
                  defaultValue="Individual"
                  selectedValue="Individual"
                  labels={['Individual', 'Non-individual']}
                  onValueChange={(value: string) =>
                    handleInputChange('type', value)
                  }
                />
              </Stack>
            </Grid>
            <BasicInfoGrid item>
              <Stack spacing={'3.5rem'}>
                <TextField
                  name="firstName"
                  label="First name"
                  value={stakeHolderData.name.firstName}
                  onChange={(e) =>
                    handleInputChange('firstName', e.target.value)
                  }
                />
                {errors.firstName && (
                  <Typography variant="caption" color={'red'}>
                    {errors.firstName}
                  </Typography>
                )}
                <TextField
                  name="lastName"
                  label="Last name"
                  value={stakeHolderData.name.lastName}
                  onChange={(e) =>
                    handleInputChange('lastName', e.target.value)
                  }
                />
                {errors.lastName && (
                  <Typography variant="caption" color={'red'}>
                    {errors.lastName}
                  </Typography>
                )}
                <TextField
                  name="contactEmail"
                  label="Contact email"
                  value={stakeHolderData.contactEmail}
                  onChange={(e) =>
                    handleInputChange('contactEmail', e.target.value)
                  }
                />
                {errors.contactEmail && (
                  <Typography variant="caption" color={'red'}>
                    {errors.contactEmail}
                  </Typography>
                )}
                <Calender
                  label="Date of birth"
                  value={dayjs(stakeHolderData.dob)}
                  onChange={(date) => {
                    handleInputChange('dob', changeToCustomDate(date))
                  }}
                />
              </Stack>
            </BasicInfoGrid>
            <Divider />
            <Grid item marginTop={'1rem'}>
              <Typography>Identification information</Typography>
              <IdentificationStack spacing={'3.5rem'}>
                <TextField
                  name="taxId"
                  label="Tax ID"
                  value={stakeHolderData.taxId}
                  onChange={(e) => handleInputChange('taxId', e.target.value)}
                />
                <TextField
                  name="employeeId"
                  label="Employee ID"
                  value={stakeHolderData.employeeId}
                  onChange={(e) =>
                    handleInputChange('employeeId', e.target.value)
                  }
                />
                <TextField
                  name="payRollId"
                  label="Payroll ID"
                  value={stakeHolderData.payRollId}
                  onChange={(e) =>
                    handleInputChange('payRollId', e.target.value)
                  }
                />
              </IdentificationStack>
            </Grid>
            <RelationShipDetailsGrid item>
              <Typography>Relationship information</Typography>
              <RelationShipDetailsStack direction={'row'} spacing={'1rem'}>
                <Calender
                  label="Effective date"
                  value={dayjs(stakeHolderData.effectiveDate)}
                  onChange={(date) => {
                    handleInputChange('effectiveDate', changeToCustomDate(date))
                  }}
                />
                <TextField
                  name="relationship"
                  label="Relationship"
                  value={stakeHolderData.relationship}
                  onChange={(e) =>
                    handleInputChange('relationship', e.target.value)
                  }
                />
                <Button startIcon={<img src={REDUCE} alt="reduce-icon" />} />
                <Button
                  startIcon={<img src={INCREASE} alt="increase-icon" />}
                />
              </RelationShipDetailsStack>
              <AddressStack>
                <Typography>Address information</Typography>
                <StyledButton onClick={() => setIsAddress(!isAddress)}>
                  <Typography color={theme.palette.textColor.highemp}>
                    Add address
                  </Typography>
                </StyledButton>
              </AddressStack>
              {isAddress && (
                <TextField
                  name="address"
                  label="Add address"
                  value={stakeHolderData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              )}
              <ActionStack
                direction={'row'}
                spacing={'1rem'}
                justifyContent={'flex-end'}
              >
                <StyledButton onClick={handleCancel}>
                  <Typography color={theme.palette.textColor.highemp}>
                    Cancel
                  </Typography>
                </StyledButton>
                {props.purposeOfModal === 'Add' ? (
                  <Button variant="contained" onClick={handleAddStakeholder}>
                    <Typography color={theme.palette.structuralColor.white}>
                      {props.purposeOfModal} stakeholder
                    </Typography>
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleUpdateStakeholder}>
                    <Typography color={theme.palette.structuralColor.white}>
                      Update
                    </Typography>
                  </Button>
                )}
              </ActionStack>
            </RelationShipDetailsGrid>
          </FormGrid>
        </ScrollableContent>
      </Modal>
    </Grid>
  )
}

export default StakeHolderModal
