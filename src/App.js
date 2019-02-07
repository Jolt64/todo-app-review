import React, { Component } from 'react';
import Todo from './components/Todo';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      userInput: ''
    };
  }

  handleInput = val => {
    this.setState({
      userInput: val
    });
  };

  componentDidMount() {
    axios.get('/api/todos').then(res => {
      console.log(res);
      this.setState({
        todos: res.data
      });
    });
  }

  addTodo() {
    const { userInput } = this.state;
    axios.post('/api/todos', { todo: userInput }).then(res => {
      console.log(res);
      this.setState({
        userInput: '',
        todos: res.data
      });
    });
  }

  deleteTodo = id => {
    axios.delete(`/api/todo/${id}`).then(res => {
      this.setState({
        todos: res.data
      });
    });
  };

  updateTodo = (id, todo) => {
    axios.put(`/api/todo/${id}`, { todo }).then(res => {
      this.setState({
        todos: res.data,
        editing: false
      });
    });
  };

  render() {
    const { todos } = this.state;
    const mappedTodos = todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      );
    });
    return (
      <div className="App">
        <h1>Todo App</h1>
        <input
          type="text"
          onChange={e => this.handleInput(e.target.value)}
          value={this.state.userInput}
        />
        <button onClick={() => this.addTodo()}>Add</button>
        {mappedTodos}
      </div>
    );
  }
}

export default App;
