// JoinOurTeam.tsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/JoinOurTeam.css";
import JoinOurTeamImage from "../images/JoinOurTeam.png";
import AdminDashboard from "./AdminDashboard";

const JoinOurTeam: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [resume, setResume] = useState("");
  const [submittedData, setSubmittedData] = useState<any>(null);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      // Send form data to the server
      await axios.post("http://localhost:3000/api/join-our-team", {
        firstName,
        lastName,
        email,
        phone,
        position,
        startDate,
        resume,
      });

      setSubmittedData({
        firstName,
        lastName,
        email,
        phone,
        position,
        startDate,
        resume,
      });

      // Clear the form data after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setStartDate("");
      setResume("");

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <div className="join-our-team-container">
        <div className="form-container">
          <h2>Come Work With Us</h2>
          <p className="Join-the-team">Join the Team</p>
          <hr></hr>
          <div className="image-container">
            <img src={JoinOurTeamImage} alt="Join Our Team" />
          </div>
          <p className="color-white">
            At AdoptKids, we believe in the transformative power of family and
            the profound impact it has on the lives of children. If you are
            passionate about making a difference and are dedicated to creating
            brighter futures for children in need, we invite you to join our
            team.
          </p>
          <h3>Why Join AdoptKids?</h3>
          <p className="color-white">
            1. Making a Real Difference: Be part of an organization that is
            committed to creating loving and permanent families for children.
            Your work will directly contribute to changing lives and building
            strong, supportive communities.
          </p>
          <p className="color-white">
            2. Collaborative Environment: Join a team of professionals who are
            not only experts in their fields but are also driven by a shared
            mission. We foster a collaborative and inclusive work environment
            where ideas are valued, and innovation is encouraged.
          </p>
          <p className="color-white">
            3. Professional Growth: AdoptKids is dedicated to the continuous
            growth and development of its team members. We provide opportunities
            for training, skill enhancement, and career advancement, ensuring
            that you can reach your full potential.
          </p>
          <p className="color-white">
            4. Impactful Work: Whether you are in social work, administration,
            legal services, or technology, your role at AdoptKids will
            contribute to the success of our mission. Every team member plays a
            crucial part in the adoption process and the well-being of children.
          </p>
          <h3>How to Apply</h3>
          <p className="color-white">
            If you are inspired by our mission and are ready to contribute your
            skills and passion, we would love to hear from you. Fill up the
            below application form. Alternatively, you can send your resume and
            cover letter to{" "}
            <a href="mailto:pnidhi323@gmail.com">pnidhi323@gmail.com</a>.
          </p>
          <p className="color-white">
            Join us in building families, creating futures, and making a lasting
            impact on the lives of children. Together, we can make a difference.
          </p>
          <p className="color-white">
            AdoptKids is an equal opportunity employer. We celebrate diversity
            and are committed to creating an inclusive environment for all
            employees.
          </p>
          <h3>Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="Testimonials-form-group">
                {/* <label htmlFor="firstName" className="color-white">
                  First Name
                </label> */}
                <input
                  type="text"
                  value={firstName}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="lastName" className="color-white">
                  Last Name
                </label> */}
                <input
                  type="text"
                  value={lastName}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                {/* <label htmlFor="email" className="color-white">
                  Email
                </label> */}
                <input
                  type="email"
                  value={email}
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="phone" className="color-white">
                  Phone
                </label> */}
                <input
                  type="tel"
                  value={phone}
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                {/* <label htmlFor="position" className="color-white">
                  Position I Am Applying
                </label> */}
                <input
                  type="text"
                  value={position}
                  id="position"
                  name="position"
                  placeholder="Position I Am Applying"
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="startDate" className="color-white">
                  Available Start Date
                </label> */}
                <input
                  type="date"
                  value={startDate}
                  id="startDate"
                  name="startDate"
                  placeholder="Available Start Date"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                {/* <label htmlFor="resume" className="color-white">
                  Resume
                </label> */}
                <input
                  type="file"
                  value={resume}
                  id="resume"
                  name="resume"
                  placeholder="Resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    setResume(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
