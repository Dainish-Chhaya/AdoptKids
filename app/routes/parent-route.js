import express from 'express';
import * as adoptiveParentController from '../controllers/parent-controller.js';

const router = express.Router();

router.route('/')
  .get(adoptiveParentController.find)
  .post(adoptiveParentController.post);

router.route('/:parentId')
  .get(adoptiveParentController.getByParentId)
  .put(adoptiveParentController.updateByParentId)
  .delete(adoptiveParentController.removeByParentId);

export default router;
