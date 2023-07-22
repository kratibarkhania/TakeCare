import mongoose from 'mongoose';
const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    speciality:{
        type: String,
        required:true
    },
    qualification:{
        type: String,
        required:true
    },
    experience:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    photos:{
        type: [String],
    },
    slots:{
       type: [String], 
    },
    onlineFees:{
        type: Number,
        required: true,
    },
});
export default mongoose.model("Doctor",DoctorSchema)