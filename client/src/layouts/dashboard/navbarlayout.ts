    // src/components/navbar.ts

export const navItems = [
  "Courses",
  "Assessments",
  "Enrollees",
  "Analytics",
  "Payments",
  "Certificates",
];

export const navbarStyles = {
  appBar: {
    backgroundColor: "#ffffff",
    color: "#333",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0",
  },
  logo: {
    height: 24,
    cursor: "pointer",
  },
  navItem: {
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    color: "#555",
    "&:hover": {
      color: "#000",
    },
  },
};
