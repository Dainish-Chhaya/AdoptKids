import * as adoptiveParentService from '../services/parent-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const find = async (request, response) => {
  try {
    const params = { ...request.query };
    const adoptiveParents = await adoptiveParentService.search(params);
    setResponse(adoptiveParents, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
}

export const post = async (request, response) => {
  try {
    const newAdoptiveParent = { ...request.body };
    const adoptiveParent = await adoptiveParentService.save(newAdoptiveParent);
    setResponse(adoptiveParent, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
}

export const getByParentId = async (request, response) => {
    try {
      const parentId = request.params.parentId;
      const adoptiveParent = await adoptiveParentService.findByParentId(parentId);
      setResponse(adoptiveParent, response);
    } catch (err) {
      setErrorResponse(err, response);
    }
  }
  
export const updateByParentId = async (request, response) => {
    try {
      const parentId = request.params.parentId;
      const updatedAdoptiveParent = { ...request.body };
      const adoptiveParent = await adoptiveParentService.updateByParentId(updatedAdoptiveParent, parentId);
      setResponse(adoptiveParent, response);
    } catch (err) {
      setErrorResponse(err, response);
    }
  }
  
export const removeByParentId = async (request, response) => {
    try {
      const parentId = request.params.parentId;
      await adoptiveParentService.removeByParentId(parentId);
      setResponse({}, response);
    } catch (err) {
      setErrorResponse(err, response);
    }
  }
