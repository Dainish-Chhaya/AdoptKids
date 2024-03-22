// services/user-service.js
import User from "../models/User_model.js";

export const register = async (newUser) => {
  try {
    const user = new User(newUser);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserById = async (userId) => {
  return await User.findById(userId).exec();
};

export const updateUserById = async (updatedUser, userId) => {
  return await User.findByIdAndUpdate(userId, updatedUser, {
    new: true,
  }).exec();
};

export const removeUserById = async (userId) => {
  return await User.findByIdAndDelete(userId).exec();
};
export const login = async (email, password) => {
  // Find the user with the provided email and password
  const user = await User.findOne({ email, password }).exec();
  return user;
};
