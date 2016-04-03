import React, { Component } from 'react';
import ToDo from './ToDo'

class App extends Component{

 	constructor(props) {
 		super(props)
    this.state = {
      todos: [,
        { value:'Be awesome', done: false },
        { value:'Learn React', done: true },
        { value:'Use JSX', done: true }
      ]
    }
  }

  addTodo(e) {
  	e.preventDefault();
  	e.stopPropagation();
    let todos = this.state.todos;

    todos.push({
      value: this.state.inputValue,
      done: false
    });

    this.setState({
      todos: todos,
      inputValue: ''
    });

    // Return false for form
    return false;
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  removeTodo(index) {
    this.state.todos.splice(index, 1);

    this.setState({
      todos: this.state.todos
    });
  }

  markTodoDone(index) {
    let todos = this.state.todos;
    let todo = this.state.todos[index];
    todos.splice(index, 1);
    todo.done = !todo.done;

    todo.done ? todos.push(todo) : todos.unshift(todo);

    this.setState({
      todos: todos
    });
  }

  renderToDo() {
  	return this.state.todos.map((todo, index)=> {
      return (
        <ToDo
        key={index}
        value={todo.value}
        done={todo.done}
        onClickClose={this.removeTodo.bind(this, index)}
        onClickDone={this.markTodoDone.bind(this, index)}
      /> );
    });
  }
  render() {

    return (
      <div className='container'>
        <div className='col-xs-6 col-xs-offset-3'>
          <h1>My Todo List</h1>
          {this.renderToDo()}
          <form
            className='form-inline todo-form col-xs-8 col-xs-offset-2'
            role='form'
            onSubmit={this.addTodo.bind(this)}>
            <div className='input-group'>
              <label className='sr-only' htmlFor='todoInput'></label>
              <input type='text' value={this.state.inputValue}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='What do you need to do?'
              />
              <span className='input-group-btn'>
                <button className='btn btn-default'>Add Todo</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;