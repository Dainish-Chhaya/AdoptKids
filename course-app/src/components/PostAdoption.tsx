// PostAdoption.tsx
import React, { useState } from 'react';
import '../styles/PostAdoption.css';

const initialAnswers = {
  Name: '',
  ChildName: '',
  EmailId: '',
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  question6: '',
  question7: '',
  question8: '',
  question9: '',
  question10: '',
  // Add more questions as needed
};

const PostAdoption: React.FC = () => {
  const [answers, setAnswers] = useState(initialAnswers);

  const handleInputChange = (question: string, value: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: value }));
  };

  const resetForm = () => {
    setAnswers(initialAnswers);
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to save survey answers in the database
      const response = await fetch('http://localhost:3000/api/survey/saveSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      if (response.ok) {
        console.log('Survey submitted and saved:', answers);
        alert("Survey submitted and saved");
        resetForm(); // Reset the form after successful submission
      } else {
        console.error('Error saving survey:', response.statusText);
        alert("Error saving survey");
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert("Error submitting survey");
    }
  };

  return (
    <div className="post-adoption-container">
      <h2>Post-Adoption Survey</h2>
      <div className="question">
        <label>Name:</label>
        <input
          type="text"
          value={answers.Name}
          onChange={(e) => handleInputChange('Name', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Child's Name:</label>
        <input
          type="text"
          value={answers.ChildName}
          onChange={(e) => handleInputChange('ChildName', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Email ID:</label>
        <input
          type="email"
          value={answers.EmailId}
          onChange={(e) => handleInputChange('EmailId', e.target.value)}
        />
      </div>
      <div className="question">
        <label>Question 1: How has your experience been so far?</label>
        <textarea
          value={answers.question1}
          onChange={(e) => handleInputChange('question1', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 2: What suggestions do you have for improvement?</label>
        <textarea
          value={answers.question2}
          onChange={(e) => handleInputChange('question2', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 3: How has the financial aspect been post-adoption?</label>
        <textarea
          value={answers.question3}
          onChange={(e) => handleInputChange('question3', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 4: Have you faced any challenges regarding medicines or health?</label>
        <textarea
          value={answers.question4}
          onChange={(e) => handleInputChange('question4', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 5: Do you feel the need for assistance in any specific area?</label>
        <textarea
          value={answers.question5}
          onChange={(e) => handleInputChange('question5', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 6: How is the mental well-being of your family members?</label>
        <textarea
          value={answers.question6}
          onChange={(e) => handleInputChange('question6', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 7: Are there any specific concerns related to education?</label>
        <textarea
          value={answers.question7}
          onChange={(e) => handleInputChange('question7', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 8: Have you availed any post-adoption support services?</label>
        <textarea
          value={answers.question8}
          onChange={(e) => handleInputChange('question8', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 9: How satisfied are you with the post-adoption support?</label>
        <textarea
          value={answers.question9}
          onChange={(e) => handleInputChange('question9', e.target.value)}
        />
      </div>

      <div className="question">
        <label>Question 10: Are there any suggestions for enhancing post-adoption services?</label>
        <textarea
          value={answers.question10}
          onChange={(e) => handleInputChange('question10', e.target.value)}
        />
      </div>

      {/* Add more questions as needed */}
      
      <button onClick={handleSubmit}>Submit Survey</button>
    </div>
  );
};

export default PostAdoption;
