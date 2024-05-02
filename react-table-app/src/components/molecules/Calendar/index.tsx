import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material'
import theme from '../../../theme'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import { DAYS_OF_WEEK } from '../../../utils/constant'
import dayjs from 'dayjs'

export interface DatePickerCompProps {
  onChange: (value: unknown) => void
  value?: Date
  label: string
}
const StyledDate = styled(DatePicker)({
  width: '100%',
  '.Mui-disabled input ': {
    WebkitTextFillColor: theme.palette.textColor.highemp,
  },
})

const Calender = (props: DatePickerCompProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDate
        defaultValue={dayjs('2000-02-02')}
        selectedSections={undefined}
        onSelectedSectionsChange={undefined}
        slots={{
          openPickerIcon: CalendarTodayOutlinedIcon,
        }}
        dayOfWeekFormatter={(date: string) => {
          return DAYS_OF_WEEK[date]
        }}
        format="DD-MM-YYYY"
        {...props}
      />
    </LocalizationProvider>
  )
}

export default Calender
