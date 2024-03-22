import express from "express";

import * as childController from "../controllers/child-controller.js";

const router = express.Router();

router
  .route("/piyush")
  .post(childController.insert)
  .get(childController.findAll);

router
  .route("/:childId")
  .get(childController.find)
  .delete(childController.deleteChild)
  .put(childController.updateByChildId);

export default router;
