import { z } from 'zod';
import * as PlantasRepository from "./plantas.repository"

const plantaSchema = z.object({
    codigo: z.string().min(1, "El código es obligatorio"),
    nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    id_tipo: z.number().int().positive("El tipo de planta es obligatorio"),
    id_tamanio: z.number().int().positive("El tamaño es obligatorio"),
    id_estado: z.number().int().positive("El estado es obligatorio"),
    fecha_plantacion: z.string().optional().nullable(),
    intervalo_riego_dias: z.number().min(1, "El intervalo debe ser al menos 1 día"),
    id_usuario: z.number().int().positive("El ID de usuario es obligatorio")
});
export const createPlanta  = async(data) =>{
    try{
        const validateData = plantaSchema.parse(data);
        return await PlantasRepository.createPlantas(validateData);
    } catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error(error.errors[0].message);
        }
        throw new Error("Error al crear la planta: " + error.message);
    }
};