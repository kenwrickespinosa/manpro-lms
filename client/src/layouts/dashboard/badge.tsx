import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { badgeConfig, VerificationStatus } from "./badgelayout";

interface BadgeProps {
  verificationStatus: VerificationStatus;
}

const Badge: React.FC<BadgeProps> = ({ verificationStatus }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const config = badgeConfig[verificationStatus];
  const Icon = config.icon;

  return (
    <Box
      sx={{
        width: "97%",
        bgcolor: config.bgColor,
        color: config.textColor,
        borderRadius: 1,
        px: 2,
        py: 1.2,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Icon sx={{ fontSize: 18 }} />

      <Typography variant="body2" sx={{ flexGrow: 1 }}>
        {config.message}
      </Typography>

      {config.dismissible && (
        <IconButton
          size="small"
          onClick={() => setVisible(false)}
          sx={{ color: config.textColor }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default Badge;
