// surveyRouter.js
import express from 'express';
import * as surveyController from '../controllers/surveyController.js';

const surveyRouter = express.Router();

// Define the route to save survey answers
surveyRouter.route('/saveSurvey').post(surveyController.saveSurveyAnswers);

// Define the route to get survey answers
surveyRouter.route('/getSurveyAnswers').get(surveyController.getSurveyAnswers);

export default surveyRouter;