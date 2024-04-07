import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import { useState } from "react"
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"

export default function Sidebar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [selected, setSelected] = useState("Dashboard")
  // return (
  //   <ProSidebar>
  //     <Menu>
  //       <SubMenu label="Charts">
  //         <MenuItem> Pie charts </MenuItem>
  //         <MenuItem> Line charts </MenuItem>
  //       </SubMenu>
  //       <MenuItem> Documentation </MenuItem>
  //       <MenuItem> Calendar </MenuItem>
  //     </Menu>
  //   </ProSidebar>
  // )
  return (
    <Drawer open={isCollapsed}>
      <Box sx={{ width: 350, height: "100%", backgroundColor: colors.primary[400] }} role="presentation">
        <Box display="flex" alignItems="center" justifyContent="space-between" p="20px">
          <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img alt="profile-user" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="100px" height="100px" style={{ cursor: "pointer", borderRadius: "50%" }}/>
        </Box>
        <Box textAlign="center">
          <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mt: "10px" }}>Ed roh</Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>VP</Typography>
        </Box>
        {/* MENU ITEMS */}
        <Box>
          
        </Box>
      </Box>
    </Drawer>
   )
}