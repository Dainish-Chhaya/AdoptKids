// Register.tsx
import React, { useState } from "react";
//import { useHistory } from 'react-router-dom';

const Register: React.FC<{ onRegister: () => void }> = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  //const history = useHistory();
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          age,
          gender,
          mobileNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data.message);
        alert("Registration successful ");
        onRegister();

        // Redirect to the login page
        window.location.href = "/";
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    }
  };

  // Validate the age
  const validateAge = () => {
    const ageRegex = /^[1-9]\d*$/; // Positive integer regex
    const parsedAge = parseInt(age, 10);
    return ageRegex.test(age) && parsedAge > 21;
  };

  return (
    <div className="container">
      <h2 className="title">Register</h2>
      {error && <p className="error">{error}</p>}
      <div className="inputContainer">
        <label className="label">Name:</label>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Username:</label>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Email:</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Password:</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Age:</label>
        <input
          type="number"
          className="input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {age && !validateAge() && (
          <p className="error">Please enter a valid age greater than 21.</p>
        )}
      </div>
      <div className="inputContainer">
        <label className="label">Gender:</label>
        <input
          type="text"
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Mobile Number:</label>
        <input
          type="tel"
          className="input"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
