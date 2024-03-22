import "../styles/ContactUs.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  });
  const navigate = useNavigate();

  const emailSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_dl11pm8",
        "template_uwppzfg",
        event.currentTarget,
        "zF8WdUGlEP6DxupYT"
      )
      .then((res) => {
        console.log(res);

        setFormData({
          name: "",
          user_email: "",
          message: "",
        });
        alert("We have received your email. We will get back to you");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <div className="form-containers">
        <h1 style={{ marginTop: "50px", fontWeight: "bold" }}>Contact Us</h1>
        <form onSubmit={emailSend}>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            value={formData.user_email}
            onChange={handleInputChange}
          />

          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleInputChange}
            style={{ height: "150px" }}
          />

          <input
            type="submit"
            className="form-control btn btn-primary submit-btn"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
