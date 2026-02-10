import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";

export interface SidebarItem {
  label: string;
  icon: React.ElementType;
  path?: string;
  action?: "logout";
}

export const sidebarConfig: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "My Profile",
    icon: PersonIcon,
    path: "/profile",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    path: "/settings",
  },
  {
    label: "Help Center",
    icon: HelpOutlineIcon,
    path: "/help",
  },
  {
    label: "Log Out",
    icon: LogoutIcon,
    action: "logout",
  },
];
