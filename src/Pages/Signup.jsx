import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const payload = { username, email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://authentication-backend-1-961o.onrender.com/api/signup-user", payload)
      .then((res) => {
        toast.success(res.data.message);

        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* signup start */}
      <div className="register">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Create Your Account
          </div>
          <div className="text-center">
            Have an account ? <Link to="/signin">SignIn</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="fs-5 fw-medium">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your UserName"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email" className="fs-5 fw-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" className="fs-5 fw-medium">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success w-100 ">
            Sign Up
          </button>
        </form>
      </div>
      {/* signup end */}
    </div>
  );
};

export default Signup;
