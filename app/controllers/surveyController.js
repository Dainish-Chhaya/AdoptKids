// surveyController.js
import Survey from '../models/surveyModel.js';

export const saveSurveyAnswers = async (req, res) => {
  try {
    const { Name, ChildName, EmailId, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 } = req.body;

    // Create a new survey instance
    const newSurvey = new Survey({
      Name,
      ChildName,
      EmailId,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      // Add more properties as needed
    });

    // Save the survey to the database
    const savedSurvey = await newSurvey.save();

    res.status(201).json(savedSurvey);
  } catch (error) {
    console.error('Error saving survey:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getSurveyAnswers = async (req, res) => {
  try {
    // Retrieve all survey answers from the database
    const allSurveyAnswers = await Survey.find();

    res.status(200).json(allSurveyAnswers);
  } catch (error) {
    console.error('Error retrieving survey answers:', error);
    res.status(500).json({ code: 'ServiceError', message: 'Error occurred while processing your request' });
  }
};



