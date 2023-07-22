import Doctor from "../models/Doctor.js";
import Slot from "../models/Slot.js"
export const createDoctor = async (req, res, next) => {
    const newDoctor = new Doctor(req.body);
  
    try {
      const savedDoctor = await newDoctor.save();
      res.status(200).json(savedDoctor);
    } catch (err) {
      next(err);
    }
  };
export const updateDoctor = async (req, res, next) => {
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedDoctor);
    } catch (err) {
      next(err);
    }
  };
  export const deleteDoctor = async (req, res, next) => {
    try {
      await Doctor.findByIdAndDelete(req.params.id);
      res.status(200).json("Doctor has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getDoctor = async (req, res, next) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      res.status(200).json(doctor);
    } catch (err) {
      next(err);
    }
  };
  export const getDoctors = async (req, res, next) => {
    try {
      const doctors = await Doctor.find(req.query);
      res.status(200).json(doctors);
    } catch (err) {
      next(err);
    }
  };
  export const countBySpeciality = async (req, res, next) => {
    const specialities = req.query.specialities.split(",")
    try {
      const list = await Promise.all(specialities.map(speciality=>{
        return Doctor.countDocuments({speciality:speciality})
      }))
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  export const getDoctorSlots = async (req, res, next) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      const list = await Promise.all(
        doctor.slots.map((slot) => {
          return Slot.findById(slot);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };