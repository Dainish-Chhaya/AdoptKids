import express from "express";

import * as fosterchildcontroller from "../controllers/fosterchildcontroller.js"

const router = express.Router();

router.route("/").post(fosterchildcontroller.submitFosterChildForm);

export default router;