import express from "express";
import Doctor from "../models/Doctor.js";
import { createError } from "../utils/error.js";
import { createDoctor, deleteDoctor,updateDoctor,getDoctor,getDoctors, countBySpeciality } from "../controllers/doctor.js";
import {verifyAdmin} from "../utils/verifyToken.js"
import { getDoctorSlots } from "../controllers/doctor.js";
const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createDoctor);
//UPDATE
router.put("/:id",verifyAdmin,updateDoctor);
//DELETE
router.delete("/:id",verifyAdmin,deleteDoctor);
//GET
router.get("/find/:id",getDoctor);
//GETALL
router.get("/",getDoctors);
router.get("/countBySpeciality",countBySpeciality);
router.get("/slot/:id",getDoctorSlots);
export default router;