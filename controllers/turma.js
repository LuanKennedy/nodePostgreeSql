import {db} from "../db.js";


export const getTurmas = (_, res) =>{
    const q = "SELECT * FROM turmas";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
    
        return res.status(200).json(data)
    })
}

