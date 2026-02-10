// import Navbar from "../../components/navbar/navbar";
import Navbar from "../../layouts/dashboard/navbar";
import Sidebar from "../../layouts/dashboard/sidebar";
import Badge from "../../layouts/dashboard/badge";
import { GppGood, Gradient } from "@mui/icons-material";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const MentorDashboard = () => {
  return (
    <>
        <Navbar />
        <Sidebar user={{ name: "John Doe", isVerified: false, profileCompletion: 80, emailVerified: true }} />
        <Box sx={{ p: 3, top: "57px", left: "17%", position: "relative", width: "80%" }}>
            {/* Header */}
            <Badge verificationStatus="unverified" />

            <Box sx={{ mt: 4}}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Dashboard
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" mb={4}>
                    Welcome Expert! Here’s an overview of your mentoring activity.
                </Typography>

                {/* Actions */}
                <Box sx={{ p: 3, mt: 4, color: "#1E7E34", bgcolor: "#E6F4EA" }}>
                    <Paper sx={{ p: 2, mb: 2, color: "#1E7E34", bgcolor: "#E6F4EA", display: "flex", alignItems: "center", gap: 1}}>
                        <GppGood/>
                        <Button variant="contained" sx={{ color: "#1E7E34", bgcolor: "#E6F4EA", fontWeight: 600 }}>Verify Expertise</Button>
                    </Paper>
                </Box>
            </Box>
        </Box>
    </>
  );
};

export default MentorDashboard;
