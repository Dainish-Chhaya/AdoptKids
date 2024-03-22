// controllers/userController.js
import * as userService from "../services/User-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const register = async (request, response) => {
  try {
    const newUser = { ...request.body };
    const user = await userService.register(newUser);
    setResponse(user, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const getUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await userService.findUserById(userId);
    setResponse(user, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const updateUser = async (request, response) => {
  try {
    const userId = request.params.id;
    const updatedUser = { ...request.body };
    const user = await userService.updateUserById(updatedUser, userId);
    setResponse(user, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};

export const deleteUser = async (request, response) => {
  try {
    const userId = request.params.id;
    await userService.removeUserById(userId);
    setResponse({}, response);
  } catch (err) {
    setErrorResponse(err, response);
  }
};
export const login = async (request, response) => {
  try {
    console.log("Login route reached");
    const { email, password } = request.body;
    const user = await userService.login(email, password);

    if (user) {
      // User authenticated successfully
      setResponse(user, response);
    } else {
      // Unauthorized, invalid credentials
      setErrorResponse({ message: "Invalid credentials" }, response, 401);
    }
  } catch (err) {
    setErrorResponse(err, response);
  }
};
