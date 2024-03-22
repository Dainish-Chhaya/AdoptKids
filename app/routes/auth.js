// routes/auth.js
import express from 'express';
import * as userController from '../controllers/userController.js';
const router = express.Router();

router.route('/register').post(userController.register);
router.route('/:id').get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser);
// Login route
router.route('/login').post(userController.login);


export default router;
