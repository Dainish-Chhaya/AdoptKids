//Since all the export in course-service.js are named export
import * as matchService from '../services/match-service.js';
import { setResponse, setErrorResponse} from './response-handler.js';
//Service layer takes the request call the service and sets the response

export const find = async (request, response) => {
    try {
        //https://expressjs.com/en/api.html#req
        const params = {...request.query};
        const matches = await matchService.search(params);
        setResponse(matches, response);
    }
    catch(err) {
        //Never print the error in err object !important
        setErrorResponse(err, response);
    }
}

export const post = async (request, response) => {
    try {
        const newMatch = {...request.body};
        const match = await matchService.save(newMatch);
        setResponse(match, response);
    }
    catch(err) { 
        setErrorResponse(err, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const match = await matchService.findById(id);
        setResponse(match, response);
    }
    catch(err) { 
        setErrorResponse(err, response);
    }
}

export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedMatch = {...request.body};
        const match = await matchService.update(updatedMatch, id);
        setResponse(match, response);
    }
    catch(err) { 
        setErrorResponse(err, response);
    }
}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const match = await matchService.remove(id);
        setResponse({}, response);
    }
    catch(err) { 
        setErrorResponse(err, response);
    }
}
