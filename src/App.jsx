import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Topbar from './components/topbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import { TeamPage } from './pages/team'
import { InvoicesPage } from './pages/invoices'
import { ContactPage } from '@mui/icons-material'
import { AddUserPage } from './pages/add-user'
import { CalendarPage } from './pages/calendar'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path='/team' element={<TeamPage />} />
              <Route path='/invoices' element={<InvoicesPage />} />
              <Route path='/contacts' element={<ContactPage />} />
              <Route path='/add-user' element={<AddUserPage />} />
              <Route path='/calendar' element={<CalendarPage />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
