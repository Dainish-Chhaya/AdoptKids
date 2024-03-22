import * as childService from "../services/child-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (request, response) => {
  try {
    const childId = request.params.childId;
    const child = await childService.findById(childId);
    setResponse(child, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const findAll = async (request, response) => {
  console.log("Called");
  try {
    const params = { ...request.query };
    const child = await childService.findAllChild(params);
    setResponse(child, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const insert = async (request, response) => {
  try {
    const newChild = { ...request.body };
    // response.status(200).json("Hello")
    const child = await childService.save(newChild);
    setResponse(child, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

// export const findAll = async (request, response) => {
//   try {
//     // const newChild = { ...request.body };
//     // response.status(200).json("Hello")
//     const child = await childService.save();
//     setResponse(child, response);
//   } catch (err) {
//     setErrorResponse(err, response);
//   }
// };

export const deleteChild = async (request, response) => {
  try {
    const childId = request.params.childId;
    await childService.remove(childId);
    setResponse({}, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const updateByChildId = async (request, response) => {
  try {
    const childId = request.params.childId;
    const newChild = { ...request.body };
    const child = await childService.updateByChildId(newChild, childId);
    setResponse(child, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

// export const post = async (request, response) => {
//   try {
//       const newChild = {...request.body};
//       const course = await childService.save(newChild);
//       setResponse(course, response);
//   }
//   catch(err) {
//       setErrorResponse(err, response);
//   }
// }
