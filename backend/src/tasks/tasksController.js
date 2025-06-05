import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const taskController = {
    createTask: async (req, res) => {
    const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).json({ message: 'taskName is required' });
    }

    try {
      const task = await prisma.task.create({
        data: {
          taskName,
          completed: false,
        },
      });

      res.status(201).json({
        success: true,
        message: 'Task created successfully',
        data: task,
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create task', error });
    }
  },

  getAllTasks: async (req, res) => {
    try {
      const tasks = await prisma.task.findMany();
      res.status(200).json({
        success: true,
        message: 'Fetched all tasks',
        data: tasks,
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch tasks', error });
    }
  },

  updateTask: async (req, res) => {
    const id = +req.params.id;

    try {
      const task = await prisma.task.update({
        where: { id },
        data: { completed: true },
      });

      res.status(200).json({
        success: true,
        message: 'Task marked as completed',
        data: task,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'Task not found',
        error,
      });
    }
  },

  deleteTask: async (req, res) => {
    const id = +req.params.id;

    try {
      await prisma.task.delete({ where: { id } });
      res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'Task not fond',
        error,
      });
    }
  },
};

export default taskController;
