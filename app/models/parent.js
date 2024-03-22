import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdoptiveParentSchema = new Schema({
  parentId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  adoptionPreferences: {
    ageRange: {
      type: [Number],
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
});

const AdoptiveParentModel = mongoose.model('adoptiveParent', AdoptiveParentSchema);

export default AdoptiveParentModel;
