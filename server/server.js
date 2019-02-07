const express = require('express');
const ctrl = require('./controller.js');

const app = express();

app.use(express.json());

// ENDPOINTS

app.get('/api/todos', ctrl.getTodos);

app.post('/api/todos', ctrl.addTodo);

app.delete('/api/todo/:id', ctrl.removeTodo);

app.put('/api/todo/:id', ctrl.updateTodo);

const SERVER_PORT = 400;
app.listen(SERVER_PORT, () => {
  console.log('Listening on port', SERVER_PORT);
});
