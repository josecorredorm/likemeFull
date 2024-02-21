const db = require('../../database/db')
const {deleteDataQuery,getIDQuery} = require('../../database/querys/index');


const deleteData= async(req,res) =>{
    try {
        const {id} = req.params;
        if(id){
                const idDB = (await db.query(getIDQuery)).rows;
                const index = idDB.find(element => element.id == id);
                if(index){
                        const values = [id]
                        db.query(deleteDataQuery,values);
                        res.status(200).json({
                            status: "Succesfull",
                            msg: "data delete successfully"
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
    deleteData
}