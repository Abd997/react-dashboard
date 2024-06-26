import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "../../theme"
import { useContext } from "react"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlined from "@mui/icons-material/SettingsOutlined"
import PersonOutlined from "@mui/icons-material/PersonOutlined"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"


export default function Topbar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined /> 
        </IconButton>
      </Box>
    </Box>
  )
}