import React, { useEffect, useState } from "react";
import axios from "axios";

interface Application {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  startDate: string;
  resume: string;
}

function JoinOurTeam() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/join-our-team");
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Join Our Team Applications</h2>

      {loading && <p>Loading...</p>}

      {!loading && applications.length === 0 && <p>No applications found.</p>}

      {!loading && applications.length > 0 && (
        <ul>
          {applications.map((application, index) => (
            <li key={application._id}>
              <h2>Response {index + 1}</h2>
              <p>First Name: {application.firstName}</p>
              <p>Last Name: {application.lastName}</p>
              <p>Email: {application.email}</p>
              <p>Phone: {application.phone}</p>
              <p>Position: {application.position}</p>
              <p>Start Date: {application.startDate}</p>
              <p>Resume: {application.resume}</p>
              {/* Add additional fields as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JoinOurTeam;
