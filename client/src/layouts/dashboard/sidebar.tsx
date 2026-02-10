import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { sidebarConfig } from "./sidebarlayout";

interface User {
  name: string;
  isVerified: boolean;
  profileCompletion: number;
  emailVerified: boolean;
}

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const isVerified = user.isVerified;

  return (
    <Box
      sx={{
        width: "15%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        bgcolor: "#fff",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* User Section */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Avatar sx={{ width: 64, height: 64 }} />
          {!isVerified && (
            <Box
              sx={{
                position: "absolute",
                bottom: -2,
                right: -2,
                bgcolor: "#FFC107",
                borderRadius: "50%",
                p: 0.5,
              }}
            >
              <LockIcon sx={{ fontSize: 14, color: "#ffffff" }} />
            </Box>
          )}
        </Box>

        <Typography variant="subtitle1" fontWeight={600} mt={1}>
          {isVerified ? user.name : "Unverified User"}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          New Expert
        </Typography>

        {!isVerified && (
          <Chip
            label="Verification Pending"
            size="small"
            sx={{
              mt: 1,
              bgcolor: "#FFF3CD",
              color: "#856404",
              fontWeight: 500,
            }}
          />
        )}
      </Box>

      {/* Profile Status */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Profile Status
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Profile Completion
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {user.profileCompletion}%
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="caption">
            Documents{" "}
            {!isVerified ? (
              <Typography component="span" color="error">
                Missing
              </Typography>
            ) : (
              <CheckCircleIcon sx={{ fontSize: 14, color: "green" }} />
            )}
          </Typography>
        </Box>

        <Box>
          <Typography variant="caption">
            Email{" "}
            {user.emailVerified ? (
              <Typography component="span" color="green">
                Verified
              </Typography>
            ) : (
              <Typography component="span" color="error">
                Unverified
              </Typography>
            )}
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Navigation */}
      <List>
        {sidebarConfig.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => {
              if (item.action === "logout") {
                console.log("Logout");
              }
            }}
          >
            <ListItemIcon>
              <item.icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{ bgcolor: "#2E7D32", textTransform: "none" }}
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;