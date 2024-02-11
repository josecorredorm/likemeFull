const router = require('express').Router();
//importar controladores
const {getController, postController} = require('../../controller/index');
const {getAllData}= getController;
const {addData}= postController;

//crear rutas 

router.get('/', getAllData)

router.post('/', addData)

module.exports=router;