const db = require('../../database/db')
const {getData} = require('../../database/querys/index');

const getAllData= async(req,res) =>{
    
    try {
        const {rowCount,rows} = await db.query(getData)
        if(rowCount){
            res.status(200).json(rows)
        }
        else{
            res.status(400).json({
                msg: "there is no information"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports= {
    getAllData
}