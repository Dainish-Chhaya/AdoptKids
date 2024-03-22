import React from "react";
import angelaImage from "../Assets/angela-300x225.jpg";
import catalina from "../Assets/Catalina.jpg";
import mario from "../Assets/Mario.jpg";
import { Link } from "react-router-dom";
import "../styles/service.css"; // Import the external CSS file

const Services: React.FC = () => {
  const handleLinkClick = (value: number) => {
    localStorage.setItem("serviceValue", value.toString());
  };

  return (
    <div className="card-containers">
      <div className="card">
        <img src={angelaImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Adopt a Child</h5>
          <p className="card-text">
            The beauty of adoption lies in the unconditional love that grows
            within a family, transcending biology and uniting hearts.
          </p>
          <Link
            to="/Login"
            className="btn btn-primary"
            onClick={() => handleLinkClick(1)}
          >
            Start the Adoption Process
          </Link>
        </div>
      </div>

      <div className="card">
        <img src={mario} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Foster a Child</h5>
          <p className="card-text">
            Fostering a child is not about perfect people, but about ordinary
            people making an extraordinary difference.
          </p>
          <Link
            to="/Login"
            className="btn btn-primary"
            onClick={() => handleLinkClick(2)}
          >
            Foster a Child
          </Link>
        </div>
      </div>

      <div className="card">
        <img src={catalina} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Post Adoption</h5>
          <p className="card-text">
            Family is not defined by our genes; it is built and maintained
            through love, commitment, and the choice to stand together.
          </p>
          <Link
            to="/Login"
            className="btn btn-primary"
            onClick={() => handleLinkClick(3)}
          >
            Post Adoption Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
