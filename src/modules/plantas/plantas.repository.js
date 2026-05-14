//importo la piscina de conexion del archivo database.js
import { pool } from "../../config/database";

export const GetAllPlantas = async () => {
    return await pool.query("SELECT * FROM plantas")
    
}