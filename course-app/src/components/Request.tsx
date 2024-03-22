// ConfirmationMessage.jsx

import React from "react";
import "../styles/Request.css"; // Import the CSS file

const Request: React.FC = () => {
  return (
    <div className="request-container">
      <h1>Your request to foster a child has been submitted.</h1>
      <p>We will get in touch with you soon.</p>
    </div>
  );
};

export default Request;
