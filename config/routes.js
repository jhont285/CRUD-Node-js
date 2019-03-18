const router = require('express').Router();
const UsersController = require('../app/controllers/usersController');

router.get('/users', UsersController.index);
router.get('/users/:id', UsersController.show);
router.post('/users', UsersController.create);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.delete);

module.exports = router;
