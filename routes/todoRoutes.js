// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the todo
 *         title:
 *           type: string
 *           description: The title of the todo
 *         completed:
 *           type: boolean
 *           description: Status of completion
 *       example:
 *         id: 609dcb8f53112340f0f6f6e2
 *         title: "Finish project"
 *         completed: false
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post('/', todoController.createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Retrieve all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', todoController.getTodos);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.put('/:id', todoController.updateTodo);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to delete
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 */
router.delete('/:id', todoController.deleteTodo);

/**
 * @swagger
 * /todos/{id}/complete:
 *   patch:
 *     summary: Mark a todo as complete
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the todo to mark as complete
 *     responses:
 *       200:
 *         description: Todo marked as complete
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.patch('/:id/complete', todoController.markComplete);

module.exports = router;
