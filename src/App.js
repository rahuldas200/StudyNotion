import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/core/Common/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OpenRoute from "./Components/core/Auth/OpenRoute";
import ForgotPassword from './Pages/ForgotPassword'
import UpdatePassword from "./Pages/UpdatePassword";
import Error from './Pages/Error'
import VarifyEmail from './Pages/VarifyEmail'
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="*" element= {<Error/>} />
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup/>
            </OpenRoute>
          }
        />
        <Route
          path="/varify-email"
          element={
            <OpenRoute>
              <VarifyEmail/>
            </OpenRoute>
            
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
             <Login/>
            </OpenRoute>
          }
        />
        <Route
          path="dashboard/my-profile"
          element={
            <OpenRoute>
              <Profile/>
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>
            
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword/>
            </OpenRoute>
            
          }
        />
      </Routes>
    </div>
  );
}

export default App;
