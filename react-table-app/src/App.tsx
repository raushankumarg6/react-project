import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import StakeholderDetailsPage from './pages/StakeholderDetailsPage'
import CapitalizationDetailsPage from './pages/CapitalizationPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StakeholderDetailsPage />} />
        </Routes>
        <Routes>
          <Route
            path="/capitalization"
            element={<CapitalizationDetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
