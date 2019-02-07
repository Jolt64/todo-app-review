let todos = [
  {
    id: 1,
    todo: 'Eat'
  },
  {
    id: 2,
    todo: 'Sleep'
  },
  {
    id: 3,
    todo: 'Code'
  }
];

module.exports = {
  getTodos: (req, res) => {
    res.status(200).send(todos);
  },

  addTodo: (req, res) => {
    const { todo } = req.body;
    const id = todos.length + 1;

    let newTodo = {
      id,
      todo: todo
    };

    todos.push(newTodo);

    res.status(200).send(todos);
  },

  removeTodo: (req, res) => {
    const { id } = req.params;

    const index = todos.findIndex(todo => {
      return todo.id == id;
    });

    todos.splice(index, 1);

    res.status(200).send(todos);
  },

  updateTodo: (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;

    const index = todos.findIndex(todo => todo.id == id);

    todos[index] = {
      id,
      todo
    };

    res.status(200).send(todos);
  }
};
