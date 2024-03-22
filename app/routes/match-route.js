import express from 'express';

import * as matchController from '../controllers/match-controller.js';

const router = express.Router();

//This sets two routes for the route /, if get is called call the find controller and the post controller if the post verb is used
router.route('/')
    .get(matchController.find)
    .post(matchController.post);

router.route('/:id')
    .get(matchController.get)
    .put(matchController.put)
    .delete(matchController.remove)


export default router;