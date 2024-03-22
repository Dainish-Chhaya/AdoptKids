import fosterchildService from "../services/fosterchild-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const submitFosterChildForm = async (request, response) => {
  try {
    const n1 = { ...request.body };
    const n2 = await fosterchildService.submitFosterChildForm(n1);
    setResponse(n2, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};
export default submitFosterChildForm;