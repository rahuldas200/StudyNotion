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
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Myprofile from "./Components/core/Dashbord/Myprofile";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import Dashbord from "./Pages/Dashbord"
import Settings from "./Components/core/Dashbord/Settings";


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
        <Route
          element = {
            <PrivateRoute>
              <Dashbord/>
            </PrivateRoute>         
          }
        >
          <Route path="dashboard/my-profile"
              element={
                <Myprofile/>           
              }
          />

          <Route path="dashboard/settings"
              element={
                <Settings/>         
              }
          />

        </Route>

        
      </Routes>
    </div>
  );
}

export default App;
