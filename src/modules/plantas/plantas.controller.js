import * as PlantasService from "./plantas.service.js";

export const createPlanta =  async (req,res)=>{
    try {
        const nuevaPlanta = await PlantasService.createPlantas(req.body);
        return res.status(201).json({
            success: true,
            data: nuevaPlanta
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message
        });
    };
};

export const getAllPlantas = async (req,res)=>{
    try {
        const plantas = await PlantasService.getAllPlantas();
        return res.status(200).json({
            success:true,
            data:plantas
        });
    } catch (error) {
        return res.statura(400).json({
            success:false,
            message: error.message
        });
    };
};

export const getPlanta = async (req, res) => {
    try {
        const {id} = req.params;
        const planta = await PlantasService.getPlanta(id);
        return res.status(200).json({
            success:true,
            data: planta
        });  
    } catch (error) {
        return res.status(404).json({
            success:false,
            message: error.message
        });
    };
};
export const updatePlanta = async(req,res) =>{
    try {
        const nuevaPlanta = await PlantasService.updatePlanta(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            data: nuevaPlanta
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message
        });
    }
}

export const deletePlanta = async(req,res) =>{
    try {
        const plantaBorrada = await PlantasService.deletePlanta(req.params.id);
        return res.status(200).json({
            success: true,
            data: plantaBorrada
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message
        });  
    };
};