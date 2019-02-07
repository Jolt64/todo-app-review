import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      userInput: ''
    };
  }

  onEdit() {
    this.setState({
      editing: true
    });
  }

  handleInput(val) {
    this.setState({
      userInput: val
    });
  }

  updateTodo() {
    this.props.updateTodo(this.props.todo.id, this.state.userInput);
    this.setState({
      editing: false
    });
  }

  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <div>
        {this.state.editing ? (
          <input
            style={{ display: 'block', margin: '20px auto' }}
            type="text"
            onChange={e => this.handleInput(e.target.value)}
            value={this.state.userInput}
          />
        ) : (
          <h3>{todo.todo}</h3>
        )}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        {this.state.editing ? (
          <button onClick={() => this.updateTodo()}>Update</button>
        ) : (
          <button onClick={() => this.onEdit()}>Edit</button>
        )}
      </div>
    );
  }
}

export default Todo;
