import joinOurTeamService from "../services/joinOurTeamService.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const submitApplication = async (request, response) => {
  try {
    const n1 = { ...request.body };
    const n2 = await joinOurTeamService.submitApplication(n1);
    setResponse(n2, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const getAllApplicants = async (request, response) => {
  try {
    const applicants = await joinOurTeamService.getAllApplicants();
    setResponse(applicants, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export default submitApplication;
