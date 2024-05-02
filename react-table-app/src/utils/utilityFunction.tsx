import dayjs, { Dayjs } from 'dayjs'
export const validateDataWithRegex = (
  regex: RegExp,
  value: string
): boolean => {
  return regex.test(value)
}

export const changeToCustomDate = (date: Dayjs | unknown) => {
  const formattedDate: Dayjs = dayjs(date as string | Date)
  return formattedDate.format('MM-DD-YYYY')
}

export const validateEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
