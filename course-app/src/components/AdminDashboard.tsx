import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserResponses from "./UserResponses";
import "../styles/AdminDashboard.css";
import AdminAdoptChild from "./AdminAdoptChild";
import JoinOurTeam from "./JoinOurTeamResponse";
import axios from "axios"; // Import Axios for API calls

interface AdminDashboardProps {
  submittedData: any;
}

function AdminDashboard({ submittedData }: AdminDashboardProps) {
  const [isAdminAdoptChildVisible, setAdminAdoptChildVisible] = useState(false);
  const [isUserResponsesVisible, setUserResponsesVisible] = useState(false);
  const [isJoinOurTeamVisible, setJoinOurTeamVisible] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleAdminAdoptButtonClick = () => {
    setAdminAdoptChildVisible((prev) => !prev);
    setUserResponsesVisible(false);
    setJoinOurTeamVisible(false);
  };

  const handleAdminSurveyResponsesButtonClick = () => {
    setUserResponsesVisible((prev) => !prev);
    setAdminAdoptChildVisible(false);
    setJoinOurTeamVisible(false);
  };

  const handleJoinOurTeamButtonClick = async () => {
    setJoinOurTeamVisible((prev) => !prev);
    setUserResponsesVisible(false);
    setAdminAdoptChildVisible(false);

    // Fetch data when the "Check Applications Received" button is clicked
    try {
      const response = await axios.get("/api/join-our-team");
      setApplications(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin!</h2>
      <button
        className="dashboard-button"
        onClick={handleAdminAdoptButtonClick}
      >
        Check/Update Child Status
      </button>

      {isAdminAdoptChildVisible && (
        <div className="dashboard-section">
          {/* Your Child Status component content goes here */}
          <AdminAdoptChild />
        </div>
      )}

      <button
        className="dashboard-button"
        onClick={handleAdminSurveyResponsesButtonClick}
      >
        User Responses
      </button>

      {isUserResponsesVisible && (
        <div className="dashboard-section">
          {/* Your User Responses component content goes here */}
          <UserResponses />
        </div>
      )}

      <button
        className="dashboard-button"
        onClick={handleJoinOurTeamButtonClick}
      >
        Check Applications Received
      </button>

      {isJoinOurTeamVisible && (
        <div className="dashboard-section">
          {/* Use the updated JoinOurTeam component */}
          <JoinOurTeam />
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
