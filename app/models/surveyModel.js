// surveyModel.js
import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({ 
  Name:String,
  ChildName:String,
  EmailId:String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String,
  question8: String,
  question9: String,
  question10: String,
  // Add more properties as needed
});

const Survey = mongoose.model('surveys', surveySchema);

export default Survey;
