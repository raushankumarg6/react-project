import { OptionItem } from './@types/index.d'

export const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/
export const NAME_REGEX = /^[A-Za-z\s]+$/
export const ALPHABETIC_SPACE_REGEX = /^[A-Za-z\s]+$/
export const ADD_STAKEHOLDER = 'Add stakeholder'
export const STAKEHOLDER_FIELDS = [
  'name.firstName',
  'name.lastName',
  'portfolioEmail',
  'contactEmail',
  'relationship',
  'costCenter',
]

export const CAPITALIZATION_FIELDS = [
  'capitalizationDetails.name',
  'capitalizationDetails.authorized',
  'capitalizationDetails.raised',
  'capitalizationDetails.certificates',
  'outstanding',
  'ownership',
  'fullyDiluted',
  'ownershipPercentage',
]

export const DAYS_OF_WEEK: {
  [key: string]: string
} = {
  Su: 'SUN',
  Mo: 'MON',
  Tu: 'TUE',
  We: 'WED',
  Th: 'THU',
  Fr: 'FRI',
  Sa: 'SAT',
}

interface NavigationOption {
  name: string
  onClick?: () => void
  isActive: boolean
}

interface GetNavigationBarOption {
  (
    onStakeHolderClick: () => void,
    onCapitalizationClick: () => void
  ): NavigationOption[]
}

export const getNavigationBarOption: GetNavigationBarOption = (
  onStakeHolderClick,
  onCapitalizationClick
) => [
  {
    name: 'Company',
    isActive: false,
  },
  {
    name: 'Securities',
    isActive: false,
  },
  {
    name: 'Capitalization',
    onClick: onCapitalizationClick,
    isActive: true,
  },
  {
    name: 'Stakeholders',
    onClick: onStakeHolderClick,
    isActive: true,
  },
  {
    name: 'Transactions',
    isActive: false,
  },
  {
    name: 'Compliance',
    isActive: false,
  },
  {
    name: 'Board',
    isActive: false,
  },
]

export const STAKEHOLDER_OPTION: OptionItem[] = [
  {
    id: 1,
    label: 'Add stakeholder',
    onClick: () => console.log('Hi'),
    enabled: true,
  },
  {
    id: 2,
    label: 'Add bulk stakeholders',
    onClick: () => console.log('Hi'),
    enabled: false,
  },
  {
    id: 3,
    label: 'Update bulk stakeholders',
    onClick: () => console.log('Hi'),
    enabled: false,
  },
  {
    id: 4,
    label: 'Import payroll data',
    onClick: () => console.log('Hi'),
    enabled: false,
  },
  {
    id: 5,
    label: 'Add custom properties',
    onClick: () => console.log('Hi'),
    enabled: false,
  },
  {
    id: 6,
    label: 'Update properties',
    onClick: () => console.log('Hi'),
    enabled: false,
  },
]
