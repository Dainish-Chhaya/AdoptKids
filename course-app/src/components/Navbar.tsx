import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logoImage from "../Assets/Company_Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  // Check if the user is logged in
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("user") !== null;

  // Logout function
  const handleLogout = () => {
    // Remove user information from sessionStorage
    sessionStorage.removeItem("user");
    // Redirect to the login page or any other desired page
    navigate("/");
  };

  // JSX for the logged-in and logged-out states
  const renderNavLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <div className="logout-container">
            <li className="logoutbutton">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </div>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </>
      );
    }
  };

  // JSX for the entire Navbar component
  return (
    <>
      <div>
        {/* ... (existing code) */}
        <header className="PageHeader">
          <nav className="HeaderNav">
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>

            <div className="CompanyName">AdoptKids</div>

            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Testimonials">Testmonials</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact US</Link>
              </li>
              <li>
                <Link to="/JoinOurTeam">Join Our Team</Link>
              </li>
              <li>
                <Link to="/Faq">FAQ</Link>
              </li>
              {renderNavLinks()}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
