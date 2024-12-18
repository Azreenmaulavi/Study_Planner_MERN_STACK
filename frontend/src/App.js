import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/StudyPlanPage";
// import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

// Landing Page
import LandingPage from "./components/landingPage/LandingPage"
import Layout from "./components/landingPage/Layout"
import Login from "./components/landingPage/Login"
import Register from "./components/landingPage/Register"
import ForgotPassword from "./components/landingPage/ForgotPassword"
import TaskList from "./pages/TaskList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} /> */}

          {/* Protected Routes */}
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/forgot-pass" element={<Layout><ForgotPassword /></Layout>} />
         
              
                
                  <Route path="/dashboard" element={<Main><Home /></Main>} />
                  <Route path="/tables" element={<Main><Tables /></Main>} />
                  <Route path="/calendar" element={<Main><Tables /></Main>} />
                  <Route path="/tasklist/:planId" element={<Main><TaskList /></Main>} />
                  <Route path="/notes" element={<Main><Rtl /></Main>} />
                  <Route path="/progress-tracker" element={<Main><Profile /></Main>} />
                  <Route path="/time-table" element={<Main><Tables /></Main>} />
                  <Route path="/profile" element={<Main><Profile /></Main>} />
                  {/* Redirect all unknown routes to /dashboard */}
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                
             
            
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
