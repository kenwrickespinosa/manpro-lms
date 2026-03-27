import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export type VerificationStatus = "unverified" | "pending" | "verified";

interface BadgeConfig {
  message: string;
  bgColor: string;
  textColor: string;
  icon: React.ElementType;
  dismissible: boolean;
}

export const badgeConfig: Record<VerificationStatus, BadgeConfig> = {
  unverified: {
    message:
      "Action Required: Verify your expertise to start building courses and managing your students.",
    bgColor: "#FFF3CD",
    textColor: "#856404",
    icon: InfoOutlinedIcon,
    dismissible: false,
  },

  pending: {
    message:
      "Your expertise verification is currently being reviewed. Please wait 24 hours for the process to complete.",
    bgColor: "#FFF3CD",
    textColor: "#856404",
    icon: InfoOutlinedIcon,
    dismissible: false,
  },

  verified: {
    message: "Congratulations! Your expertise is verified. You can now unlock the full potential of ManPro by creating your first course.",
    bgColor: "#E6F4EA",
    textColor: "#1E7E34",
    icon: CheckCircleOutlineIcon,
    dismissible: true,
  },
};
