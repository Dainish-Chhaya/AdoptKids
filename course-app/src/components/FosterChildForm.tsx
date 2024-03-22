import React, { useState } from "react";
import "../styles/FosterChildForm.css";
import img from "../images/DonateChild.jpg";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const FosterChildForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthdate] = useState("");
  const [parentName, setParentName] = useState("");
  const [grade, setGrade] = useState("");
  const [country, setCountry] = useState("");
  const [biography, setBiography] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000000);
    const uniqueId = `${timestamp}${random}`;

    Axios.post("http://localhost:3000/api/fosterchild", {
      childId: uniqueId,
      name: name,
      gender: gender,
      birthDate: birthDate,
      parentName: parentName,
      grade: grade,
      country: country,
      biography: biography,
      healthStatus: selectedStatus,
      photo: photo,
    })
      .then(() => {
        console.log("Called");
        navigate("/Services/FosterChildForm/Request");
        // Reset form fields
        setName("");
        setGender("");
        setBirthdate("");
        setParentName("");
        setGrade("");
        setCountry("");
        setBiography("");
        setSelectedStatus("");
        setPhoto("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <div className="Foster-Child-Form-container">
        <div className="form-containers1">
          <h2 className="heading-texts1">Foster A Child</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="label-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender" className="label-text">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  className="input-field"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="birthDate" className="label-text">
                  BirthDate
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="input-field"
                  onChange={(e) => {
                    setBirthdate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country" className="label-text">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="input-field"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="biography" className="label-text">
                  Biography
                </label>
                <input
                  type="text"
                  id="biography"
                  name="biography"
                  className="input-field"
                  onChange={(e) => {
                    setBiography(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="healthstatus" className="label-text">
                  Status
                </label>
                <select
                  id="healthstatus"
                  name="healthstatus"
                  className="select-field"
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                  }}
                  value={selectedStatus}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="Adopted">Adopted</option>
                  <option value="Not Adopted">Not Adopted</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="grade" className="label-text">
                  Paygrade
                </label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  className="input-field"
                  onChange={(e) => {
                    setGrade(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parentname" className="label-text">
                  Parent Name
                </label>
                <input
                  type="text"
                  id="parentname"
                  name="parentname"
                  className="input-field"
                  onChange={(e) => {
                    setParentName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="photo" className="label-text">
                  Upload Child Photo
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  accept=".png,.jpg,.jpeg"
                  className="input-field"
                  onChange={(e) => {
                    setPhoto(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={img} alt="FosterChildForm" />
        </div>
      </div>
    </div>
  );
};

export default FosterChildForm;
