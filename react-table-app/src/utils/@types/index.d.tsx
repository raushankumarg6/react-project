import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Typography from '../../components/atoms/Typography'
import OPTION from '../../../public/assets/images/option.svg'
import theme from '../../theme'
import Button from '../../components/atoms/Button'
import { Grid, Stack } from '@mui/material'

export enum ModalPurpose {
  Edit = 'Edit',
  Add = 'Add',
}

export interface OptionItem {
  id?: number
  label: string
  enabled?: boolean
  onClick: () => void
}

export interface AxiosErrorType {
  message: string
  response?: string
}

export interface StackHolderRowType {
  id: number
  name: {
    firstName: string
    lastName: string
  }
  portfolioEmail: string
  contactEmail: string
  relationship: string
  costCenter: string
  ownership: number
}

export interface CapitalizationRowType {
  capitalizationDetails: {
    name: string
    authorized: string
    raised: string
    certificates: string
  }
  outstanding: number
  ownership: number
  fullyDiluted: number
  ownershipPercentage: number
}

export const getStakeHolderColumns = (
  onRowClick: (row: StackHolderRowType) => void
): GridColDef[] => [
  {
    field: 'name',
    headerName: 'STAKEHOLDER',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction={'row'} spacing={'.5rem'}>
          <Typography variant="body3" color={theme.palette.textColor.medemp}>
            {params.value.firstName}
          </Typography>
          <Typography variant="body3" color={theme.palette.textColor.medemp}>
            {params.value.lastName}
          </Typography>
        </Stack>
      )
    },
  },
  {
    field: 'portfolioEmail',
    headerName: 'PORTFOLIO EMAIL',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant="body3" color={theme.palette.textColor.medemp}>
          {params.value}
        </Typography>
      )
    },
  },
  {
    field: 'contactEmail',
    headerName: 'CONTACT EMAIL',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant="body3" color={theme.palette.textColor.medemp}>
          {params.value}
        </Typography>
      )
    },
  },
  {
    field: 'relationship',
    headerName: 'RELATIONSHIP',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant="body3" color={theme.palette.textColor.medemp}>
          {params.value}
        </Typography>
      )
    },
  },
  {
    field: 'costCenter',
    headerName: 'COST CENTER',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant="body3" color={theme.palette.textColor.medemp}>
          {params.value}
        </Typography>
      )
    },
  },
  {
    field: 'ownership',
    headerName: 'OWNERSHIP',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant="body3" color={theme.palette.textColor.medemp}>
          {params.value}%
        </Typography>
      )
    },
  },
  {
    field: 'option',
    headerName: '',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Button
          onClick={() => onRowClick(params.row)}
          startIcon={<img src={OPTION} alt="option-icon" />}
        />
      )
    },
  },
]

export const CapitalizationColumn: GridColDef[] = [
  {
    field: 'capitalizationDetails',
    headerName: '',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant="body3" color={theme.palette.textColor.medemp}>
              {params.value.name}
            </Typography>
          </Grid>
        </Grid>
      )
    },
  },
  {
    field: 'outstanding',
    headerName: 'OUTSTANDING',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant="body3" color={theme.palette.textColor.medemp}>
              {params.value}
            </Typography>
          </Grid>
        </Grid>
      )
    },
  },
  {
    field: 'ownership',
    headerName: 'OWNERSHIP',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant="body3" color={theme.palette.textColor.medemp}>
              {params.value}
            </Typography>
          </Grid>
        </Grid>
      )
    },
  },
  {
    field: 'fullyDiluted',
    headerName: 'FULLY DILUTED',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant="body3" color={theme.palette.textColor.medemp}>
              {params.value}
            </Typography>
          </Grid>
        </Grid>
      )
    },
  },
  {
    field: 'ownershipPercentage',
    headerName: 'OWNERSHIP %',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant="body3" color={theme.palette.textColor.medemp}>
              {params.value}%
            </Typography>
          </Grid>
        </Grid>
      )
    },
  },
]
