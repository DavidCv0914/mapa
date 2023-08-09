import conexion from "../database/db.js";

export const getDep = async (req, res) => {
    try {
  
        const [resp] = await conexion.query(`SELECT * FROM departamentos`);
  
        res.json(resp)
      
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "ERROR 404", error });
    }
  };
  