const db = require('../../database/db')
const {postDataQuery} = require('../../database/querys/index');

const addData= async(req,res) =>{
    try {
        console.log(req.body)
        if(req.body){
            const {titulo, img, descripcion, likes} = req.body;
            if(titulo && img && descripcion){
                if(titulo.length>25 || img.length> 1000 || descripcion.length> 255){
                    res.status(400).json({
                        status: "bad request",
                        msg: "maximum characters exceeded"
                    })
                    console.log("maximum characters exceeded");
                }
                    else{
                    const values = [titulo, img, descripcion, likes];
                    db.query(postDataQuery, values)
                    res.status(200).json({
                    status: "Add succesfull",
                    msg: "data added successfully"
                    })
                    
                    }
            }
            else{
                res.status(400).json({
                    status: "bad request",
                    msg: "All data is required"
                })
            }
    }
    else{
        res.status(400).json({
            status: "bad request",
            msg: "data is required"
        })
    }
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    addData
}