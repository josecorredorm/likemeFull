const db = require('../../database/db')
const {putDataQuery, getIDQuery} = require('../../database/querys/index');


const modData= async(req,res) =>{
    try {
        const {id} = req.params;
        if(id){
                const idDB = (await db.query(getIDQuery)).rows;
                const index = idDB.find(element => element.id == id);
                if(index && Number.isInteger(id)){
                        NewLike = index.likes + 1;
                        console.log(NewLike);
                        const values =[NewLike, id];
                        db.query(putDataQuery,values);
                        res.status(200).json({
                            status: "Succesfull",
                            msg: "data act successfully"
                        })
                        
                }
                else{
                    res.status(400).json({
                        status: "bad request",
                        msg: "the ID is invalid or does not exist"
                    })
                }
        }
        else{
            res.status(404).json({
                status: "bad request",
                msg: " it is necessary to send ID"
            })
        }
    } catch (error) {
        console.log(error)
        
    }
   
 
}

module.exports= {
    modData
}