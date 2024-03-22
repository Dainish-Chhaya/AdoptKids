import Child from "../models/child.js";

export const search = async (params = {}) => {
  //https://mongoosejs.com/docs/api/model.html - doc for all the possible actions on the model
  //.exec() function returns a promise
  const child = await Child.find(params).exec();
  return child;
};

export const save = async (newChild) => {
  //Create new instance and save it
  const child = new Child(newChild);
  return await child.save(); //.save returns a promise
};

export const remove = async (childId) => {
  const child = await Child.findOneAndDelete({ childId }).exec();
  return child;
};

export const findById = async (childId) => {
  const child = await Child.findOne({ childId }).exec();
  return child;
};

export const findAllChild = async (params = {}) => {
  const child = await Child.find(params).exec();
  return child;
};

export const updateByChildId = async (updatedChild, childId) => {
  const childParent = await Child.findOneAndUpdate({ childId }, updatedChild, {
    new: true,
  }).exec();
  return childParent;
};
