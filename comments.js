//Create web server
// 1. Import express
const express = require('express');
// 2. Create router
const router = express.Router();
// 3. Import db
const db = require('../db');
// 4. Create controller
const controller = require('../controller/comments.controller');
// 5. Create route
router.get('/', controller.index);
router.get('/create', controller.create);
router.get('/:id', controller.id);
router.get('/delete/:id', controller.delete);
router.get('/update/:id', controller.update);
router.get('/update/:id', controller.update);
router.post('/create', controller.postCreate);
// 6. Export router
module.exports = router; 