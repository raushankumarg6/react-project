import { Autocomplete, AutocompleteProps } from '@mui/material'
import TextField from '../../atoms/TextField'
import { OptionItem } from '../../../utils/@types/index.d'

export interface DropdownProps {
  label?: string
  options: OptionItem[]
  width?: number | string
  height?: number | string
  value?: OptionItem | null
  onChange?: any
  disabled?: boolean
  sx?: React.CSSProperties
  size: AutocompleteProps<OptionItem, false, false, false>['size']
  popupIcon?: React.ReactNode
  inputValue?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  width,
  height,
  disabled,
  size,
  popupIcon,
  onChange,
  inputValue,
}) => {
  return (
    <Autocomplete
      onChange={onChange}
      disablePortal
      options={options}
      sx={{ width: width, height: height }}
      size={size}
      inputValue={inputValue}
      popupIcon={popupIcon}
      renderInput={(params) => <TextField {...params} label={label} />}
      disabled={disabled}
    />
  )
}

export default Dropdown
