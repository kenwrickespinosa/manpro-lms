import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./features/auth/register/Register";
import Login from "./features/auth/login/Login";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import Otp from "./features/auth/otp/Otp";
import MentorDashboard from "./pages/mentor_side/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<Otp />} />
        </Route>
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
