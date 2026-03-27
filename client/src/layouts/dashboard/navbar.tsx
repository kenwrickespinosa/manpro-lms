// src/components/Navbar.tsx
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { navItems, navbarStyles } from "./navbarlayout";
import manprologo from "../../assets/manprologo.svg";
        
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ ...navbarStyles.appBar, width: "83%", position: "fixed", top: 0, right: "0%"}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box display="flex" alignItems="center">
          <img
            src={manprologo}
            alt="ManPro"
            style={navbarStyles.logo}
          />
        </Box>

        {/* Center: Navigation */}
        <Stack direction="row" spacing={4}>
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={navbarStyles.navItem}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        {/* Right: User + Notification */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography fontSize={14} fontWeight={500}>
            ManPro Expert Hub
          </Typography>

          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
