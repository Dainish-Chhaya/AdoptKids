import cors from "cors";
import express from "express";
import registerRouter from "./routes/index.js";
import mongoose from "mongoose";
import models from "./models/child.js";

const initialize = (app) => {
  //Below three are middlewares
  app.use(cors()); //Enables to access this service from different domains
  app.use(express.json()); //If body has JSON it knows how to parse it
  app.use(express.urlencoded()); //Encode the HTTP request - spaces in the URL valid or not - Browser encode the value like the space - this middleware decodes the URL encoded by the browser

  //TODO: MongoDB connection
  //Need to add a MongoDB connection

  // mongoose.connect('mongodb+srv://shethary:ucJRf0jrLG2A0cTa@aryancluster.1rh8nkz.mongodb.net/AryanToday?retryWrites=true&w=majority');

  //mongoose.connect('mongodb+srv://piyushchhoriya98:Piyush%40123@cluster0.nrnyfjy.mongodb.net/childDb');

  mongoose.connect('mongodb+srv://chhayad:y6ux89TJmfH9vdo0@matchadoptiondb.n7vq5on.mongodb.net/MatchAdoptiondb?retryWrites=true&w=majority');
  // mongoose.connect("mongodb+srv://piyushchhoriya98:Piyush%40123@cluster0.nrnyfjy.mongodb.net/childDb");
  //TODO: Initialize routes
  registerRouter(app);
};

export default initialize;
