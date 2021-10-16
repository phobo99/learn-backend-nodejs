import doctorService from "../services/doctorService";
import express from "express";

let getTopDoctorHome = async (req: express.Request, res: express.Response) => {
    try {
        let response = await doctorService.getTopDoctorHome()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error from server..."
        })
    }
}
let getAllDoctors = async (req: express.Request, res: express.Response) => {
    try {
        let doctors = await doctorService.getAllDoctors();
        return res.status(200).json(doctors)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let postInforDoctor = async (req: express.Request, res: express.Response) => {
    try {
        let response = await doctorService.saveDetailInforDoctor(req.body);
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getDetailDoctorById = async (req: express.Request, res: express.Response) => {
    try {
        let info = await doctorService.getDetailDoctorById(req.query.id);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        res.status(200).json({
            errCode: -1,
            errMessage: 'error from the server'
        })
    }
}
export default {
    getTopDoctorHome,
    getAllDoctors,
    postInforDoctor,
    getDetailDoctorById
}