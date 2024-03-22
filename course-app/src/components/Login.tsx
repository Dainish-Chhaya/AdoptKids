// Login.tsx
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const user = sessionStorage.getItem("user");
    if (user) {
      // User is logged in, redirect to the appropriate page
      const serviceValue = localStorage.getItem("serviceValue");
      const LOGIN_KEY = 1;
      if (serviceValue) {
        switch (parseInt(serviceValue)) {
          case 1:
            navigate("/Services/AdoptChild");
            break;
          case 2:
            navigate("/Services/FosterChildForm");
            break;
          case 3:
            navigate("/Services/PostAdoption");
            break;
          default:
            navigate("/");
            break;
        }
      }
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      console.log("Attempting login with email:", email);
      console.log("Sending request to /api/auth/login");
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful");
        alert("Login successful"); // Alert for successful login

        // Store user information in sessionStorage
        sessionStorage.setItem("user", JSON.stringify({ email }));
        const serviceValue = localStorage.getItem("serviceValue");

        if (serviceValue) {
          switch (parseInt(serviceValue)) {
            case 1:
              navigate("/Services/AdoptChild");
              break;
            case 2:
              navigate("/Services/FosterChildForm");
              break;
            case 3:
              navigate("/Services/PostAdoption");
              break;
          }
        }
      } else {
        console.error("Login failed");
        alert("Login failed. Please check your email and password."); // Alert for failed login
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again later."); // Alert for login error
    }
  };

  const handleAdminLogin = () => {
    // Hardcoded admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "adminPassword";

    // Simulate admin login locally
    if (email === adminEmail && password === adminPassword) {
      console.log("Admin Login successful");
      alert("Admin Login successful");
      navigate("/AdminDashboard");
    } else {
      console.error("Admin Login failed");
      alert("Admin Login failed or you are not an Admin ");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      {/* Admin Login section */}
      <p>If you are an admin, login here:</p>
      <button className="admin-login-button" onClick={handleAdminLogin}>
        Admin Login
      </button>

      {/* New user registration text and button */}
      <p>If you are a new user, register here:</p>
      <Link to="/register" className="register-link">
        Register here
      </Link>
    </div>
  );
};

export default Login;
