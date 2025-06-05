import express from 'express';
import taskcontroller from '../tasks/tasksController.js';

const router = express.Router();

router.post('/', taskcontroller.createTask);
router.get('/', taskcontroller.getAllTasks);
router.put('/:id', taskcontroller.updateTask);
router.delete('/:id', taskcontroller.deleteTask);

export default router;
