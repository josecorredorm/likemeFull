const router = require('express').Router();
//importar controladores
const {putController} = require('../../controller/index');
const {modData}= putController;

//crear rutas 

router.put('/:id', modData);


module.exports=router;