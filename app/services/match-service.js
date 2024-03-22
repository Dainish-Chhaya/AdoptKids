import Match from '../models/match.js'

//If the passed object is null/undefined it sets to default value
export const search = async (params = {}) => {
    //https://mongoosejs.com/docs/api/model.html - doc for all the possible actions on the model
    //.exec() function returns a promise
    const matches = await Match.find(params).exec();
    return matches;
}

export const save = async (newMatch) => {
    //Create new instance and save it
    const match = new Match(newMatch);
    return await match.save(); //.save returns a promise
}

export const findById = async (id) => {
    const matches = await Match.findById(id).exec();
    return matches;
}


export const update = async (updatedMatch, id) => {
    const matches = await Match.findByIdAndUpdate(id, updatedMatch).exec();
    return matches;
}

export const remove = async (id) => {
    const matches = await Match.findByIdAndDelete(id).exec();
    // return matches;
}

