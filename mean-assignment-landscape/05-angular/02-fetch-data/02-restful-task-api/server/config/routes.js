const task = require('../controllers/tasks.js');

module.exports = (app) => {

	app.get('/tasks', (request, response) => {
		task.view_task(request, response);
	});

	app.get('/tasks/:id', (request, response) => {
		task.get_task(request, response);
	});

	app.post('/tasks', (request, response) => {
		task.create_task(request, response);
	});

	app.put('/tasks/:id', (request, response) => {
		task.update_task(request, response);
	});

	app.delete('/tasks/:id', (request, response) => {
		task.delete_task(request, response);
	});
};