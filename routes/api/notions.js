var express = require('express');
var router = express.Router();
var notionsCtrl = require('../../controllers/api/notions');

router.get('/', notionsCtrl.index);
router.get('/:id', notionsCtrl.show);
router.get('/', notionsCtrl.create);
// router.delete('/:id', notionsCtrl.delete);
// router.put('/:id', notionsCtrl.update)

module.exports = router; 
