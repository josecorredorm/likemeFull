const router = require('express').Router();
//importar controladores
const {getController, postController} = require('../../controller/index');
const {deleteController} = require('../../controller/index');
const {getAllData}= getController;
const {addData}= postController;
const {deleteData} = deleteController;

//crear rutas 

router.get('/', getAllData);

router.post('/', addData);

router.delete('/:id', deleteData);

module.exports=router;