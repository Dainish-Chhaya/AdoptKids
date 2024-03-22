// UserResponses.tsx
import React, { useState, useEffect } from "react";
import "../styles/UserResponses.css"; // Import the CSS file

interface UserResponse {
  Name: string;
  ChildName: string;
  EmailId: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
}

export default function UserResponses() {
    const [userResponses, setUserResponses] = useState<UserResponse[]>([]);
    const [expandedUsers, setExpandedUsers] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUserResponses = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/survey/getSurveyAnswers"
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log("Fetched data:", data);
          setUserResponses(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user responses:", error);
          setLoading(false);
        }
      };
  
      fetchUserResponses();
    }, []);
  
    const toggleUser = (index: number) => {
      setExpandedUsers((prevExpandedUsers) => {
        if (prevExpandedUsers.includes(index)) {
          return prevExpandedUsers.filter((userIndex) => userIndex !== index);
        } else {
          return [...prevExpandedUsers, index];
        }
      });
    };
  
    return (
      <div className="container">
        {loading && <p>Loading...</p>}
        {!loading &&
          userResponses.map((user, index) => (
            <div className="userBox" key={index}>
              <h1>{user.Name}</h1>
              <button className="toggleButton" onClick={() => toggleUser(index)}>
                {expandedUsers.includes(index) ? "Hide Data" : "Show Data"}
              </button>
          {expandedUsers.includes(index) && (
            <div className="userDetails">
              <p>Name: {user.Name}</p>
              <p>Child Name: {user.ChildName}</p>
              <p>Email: {user.EmailId}</p>
              <p>Question1: How has your experience been so far? : <span className="newLine">{user.question1}</span></p>
              <p>Question2: What suggestions do you have for improvement? : <span className="newLine">{user.question2}</span></p>
              <p>Question3: How has the financial aspect been post-adoption? <span className="newLine">{user.question3}</span></p>
              <p>Question4: Have you faced any challenges regarding medicines or health? <span className="newLine">{user.question4}</span></p>
              <p>Question5: Do you feel the need for assistance in any specific area? <span className="newLine">{user.question5}</span></p>
              <p>Question6: How is the mental well-being of your family members? <span className="newLine">{user.question6}</span></p>
              <p>Question7: Are there any specific concerns related to education? <span className="newLine">{user.question7}</span></p>
              <p>Question8: Have you availed any post-adoption support services? <span className="newLine">{user.question8}</span></p>
              <p>Question9: How satisfied are you with the post-adoption support? <span className="newLine">{user.question9}</span></p>
              <p>Question10: Are there any suggestions for enhancing post-adoption services? <span className="newLine">{user.question10}</span></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
