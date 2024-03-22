import express from "express";
import * as joinOurTeamController from "../controllers/joinOurTeamController.js";

const router = express.Router();

router.route("/").post(joinOurTeamController.submitApplication);
router.route("/").get(joinOurTeamController.getAllApplicants);

export default router;
