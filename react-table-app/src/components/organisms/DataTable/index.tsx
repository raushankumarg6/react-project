import React, { useEffect, useState } from 'react'
import {
  Grid,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogContent,
  styled,
  Snackbar,
  Alert,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { AxiosErrorType } from '../../../utils/@types/index.d'
import { getDataByURL } from '../../../services'

interface DataTableProps {
  path: string
  searchTerm: string
  columns: GridColDef[]
  style?: React.CSSProperties
  showCheckbox?: boolean
  searchFields?: string[]
}

const BlurredBackdrop = styled(Backdrop)`
  backdrop-filter: blur(8px);
  backgroundcolor: 'rgba(0,0,30,0.4)';
`

export default function DataTable<T>(props: DataTableProps) {
  const [rows, setRows] = useState<T[]>([])
  const [filteredRows, setFilteredRows] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<AxiosErrorType | null>(null)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      fetchData()
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [props.path])

  useEffect(() => {
    filterData(props.searchFields, props.searchTerm)
  }, [props.searchTerm])

  const fetchData = async () => {
    try {
      const response = await getDataByURL(props.path)
      setRows(response.data)
      setLoading(false)
      setError(null)
    } catch (error: any) {
      console.log(error.code)
      setError({
        message: error.message,
        response: error.code,
      })
      setLoading(false)
    }
  }
  const filterData = (searchFields: string[], searchTerm: string) => {
    const filteredData = rows.filter((row) => {
      const rowValues = searchFields
        .map((field) => {
          const nestedValue = field
            .split('.')
            .reduce((obj, key) => obj?.[key], row)
          return nestedValue?.toString().toLowerCase() || ''
        })
        .filter(Boolean)

      return rowValues.some((value) => value.includes(searchTerm.toLowerCase()))
    })
    setFilteredRows(filteredData)
  }

  const handleClose = () => {
    setError((prevError) => ({
      ...prevError,
      message: '',
    }))
  }

  return (
    <Grid container style={props.style}>
      {loading ? (
        <Dialog
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropComponent={BlurredBackdrop}
        >
          <DialogContent>
            <CircularProgress data-testid="loading-indicator" />
          </DialogContent>
        </Dialog>
      ) : (
        <DataGrid
          data-testid="datagrid-id"
          rows={filteredRows.length ? filteredRows : rows}
          columns={props.columns}
          hideFooter
          checkboxSelection={props.showCheckbox}
        />
      )}
      <Snackbar
        open={!!error?.message}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity="error" onClose={handleClose}>
          {error?.message}
        </Alert>
      </Snackbar>
    </Grid>
  )
}
