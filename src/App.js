import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/core/Common/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
