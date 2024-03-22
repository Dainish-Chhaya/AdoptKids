import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/MoreInfo.css";

interface ChildDetailsProps {
  childId: string;
}

interface ChildData {
  childId: string;
  name: string;
  gender: string;
  birthDate: string;
  parentName: string;
  grade: string;
  country: string;
  biography: string;
  healthStatus: string;
  photo: string;
}

function MoreInfo() {
  const navigate = useNavigate();
  const storedChildId = localStorage.getItem("selectedChildId");
  const id = storedChildId ? JSON.parse(storedChildId) : null;

  const childDetails = useSelector((state: { child: ChildData[] }) =>
    state.child.find((child) => child.childId === id)
  );

  useEffect(() => {
    if (!childDetails) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/child/${id}`);
          const data: ChildData = await response.json();

          setChildDetails(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [childDetails, id]);

  const setChildDetails = (data: ChildData) => {};

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
              <strong> Status:</strong> {healthStatus}
            </p>
          </div>
        </div>
        <button
          className="get-in-touch-button"
          onClick={() => navigate("/ContactUs")}
        >
          If Interested Get in Touch
        </button>
        <div className="text-bg-info p-3">
          Breaking the bitter chains of poverty through education, healthcare,
          dignified housing, economic and social empowerment, and sustainable
          development.
        </div>
      </>
    );
  };

  return <div>{renderChildInfo()}</div>;
}

export default MoreInfo;
