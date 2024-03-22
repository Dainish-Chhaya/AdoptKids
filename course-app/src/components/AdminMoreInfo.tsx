import { useEffect, useState } from "react";
import "../styles/MoreInfo.css";
import angelaImage from "../Assets/angela-300x225.jpg";
import { useNavigate } from "react-router-dom";

interface ChildDetailsProps {
  childId: string;
}

function AdminMoreInfo() {
  const [childDetails, setChildDetails] = useState<any>(null);
  const navigate = useNavigate();

  const buttonCalled = async () => {
    try {
      if (!childDetails) {
        console.error("Child details not available.");
        return;
      }

      const id = childDetails.childId;
      const response = await fetch(`http://localhost:3000/child/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          healthStatus:
            childDetails?.healthStatus === "Not Adopted"
              ? "Adopted"
              : "Not Adopted",
        }),
      });

      if (response.ok) {
        setChildDetails((prevDetails: { healthStatus: string }) => ({
          ...prevDetails,
          healthStatus:
            prevDetails.healthStatus === "Not Adopted"
              ? "Adopted"
              : "Not Adopted",
        }));
      } else {
        console.error("Failed to update health status");
      }
    } catch (error) {
      console.error("Error updating health status:", error);
    }
  };

  const deleteButtonCalled = async () => {
    try {
      if (!childDetails) {
        console.error("Child details not available.");
        return;
      }

      const id = childDetails.childId;
      const response = await fetch(`http://localhost:3000/child/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Child deleted");
        navigate("/AdminDashboard");
      } else {
        console.error("Error deleting child");
      }
    } catch (error) {
      console.error("Error deleting child:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedChildId = localStorage.getItem("selectedChildId");
        const id = storedChildId ? JSON.parse(storedChildId) : null;

        const response = await fetch(`http://localhost:3000/child/${id}`);
        const data = await response.json();
        setChildDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderChildInfo = () => {
    if (!childDetails) {
      return <p>Loading...</p>;
    }

    const {
      name,
      gender,
      birthDate,
      parentName,
      grade,
      country,
      biography,
      healthStatus,
      photo,
    } = childDetails;

    return (
      <>
        <div className="student-info-container">
          <img src={photo} alt={name} className="student-image" />
          <div className="student-details">
            <h1>{name}</h1>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>Birth Date:</strong> {birthDate}
            </p>
            <p>
              <strong>Parent Name:</strong> {parentName}
            </p>
            <p>
              <strong>Grade:</strong> {grade}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>Biography:</strong> {biography}
            </p>
            <p>
              <strong>Health Status:</strong> {healthStatus}
            </p>
          </div>
        </div>
        <button className="get-in-touch-button" onClick={buttonCalled}>
          Click here to change the status
        </button>
        <button className="get-in-touch-button" onClick={deleteButtonCalled}>
          Click here to delete the child
        </button>
      </>
    );
  };

  return <div>{renderChildInfo()}</div>;
}

export default AdminMoreInfo;
