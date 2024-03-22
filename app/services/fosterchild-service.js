// import FosterChild from "../models/fosterchild.js";
import Child from "../models/child.js";

const submitFosterChildForm = async (formData) => {
  try {
    const newFChild = new Child(formData);
    const savedFChild = await newFChild.save();
    return savedFChild;
  } catch (error) {
    throw error;
  }
};

export default {
  submitFosterChildForm,
};
