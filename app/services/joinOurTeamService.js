import Applicant from "../models/applicantModel.js";

const submitApplication = async (formData) => {
  try {
    const newApplicant = new Applicant(formData);
    const savedApplicant = await newApplicant.save();
    return savedApplicant;
  } catch (error) {
    throw error;
  }
};
const getAllApplicants = async () => {
  try {
    const applicants = await Applicant.getAllApplicants();
    return applicants;
  } catch (error) {
    throw error;
  }
};

export default {
  submitApplication,
  getAllApplicants,
};
