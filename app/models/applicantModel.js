import mongoose from "mongoose";

const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: false,
  },
});

applicantSchema.statics.getAllApplicants = async function () {
  try {
    const applicants = await this.find();
    return applicants;
  } catch (error) {
    throw error;
  }
};

const Applicant = mongoose.model("JoinOurTeam", applicantSchema);

export default Applicant;
