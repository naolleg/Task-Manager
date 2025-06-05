import express from 'express';
import taskRoutes from '../tasks/tasksRouter.js';

const approuter = express.Router();

approuter.use('/tasks', taskRoutes);

export default approuter;
