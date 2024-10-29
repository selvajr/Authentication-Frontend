import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <ToastContainer />
        </div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin setToken={setToken} />} />
          <Route path="/home" element={<Home token={token} />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword token={token}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
<h1>App Component</h1>;
