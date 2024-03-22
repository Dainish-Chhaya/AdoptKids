import AdoptiveParent from '../models/parent.js';

export const search = async (params = {}) => {
  const adoptiveParents = await AdoptiveParent.find(params).exec();
  return adoptiveParents;
}

export const save = async (newAdoptiveParent) => {
  const adoptiveParent = new AdoptiveParent(newAdoptiveParent);
  return await adoptiveParent.save();
}

export const findByParentId = async (parentId) => {
    const adoptiveParent = await AdoptiveParent.findOne({ parentId }).exec();
    return adoptiveParent;
}
  
export const updateByParentId = async (updatedAdoptiveParent, parentId) => {
    const adoptiveParent = await AdoptiveParent.findOneAndUpdate({ parentId }, updatedAdoptiveParent, { new: true }).exec();
    return adoptiveParent;
}
  
export const removeByParentId = async (parentId) => {
    const adoptiveParent = await AdoptiveParent.findOneAndDelete({ parentId }).exec();
    return adoptiveParent;
}
