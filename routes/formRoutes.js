import express from "express";
import { submitForm, getForms } from "../controllers/formController.js";
import { validateForm } from "../middleware/validation.js";

const router = express.Router();

router.post("/submit", validateForm, submitForm);
router.get("/submissions", getForms);

export default router;
