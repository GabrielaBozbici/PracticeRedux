import React, { Component } from 'react';
import './App.css';

import CreateTodo from './components/createTodo/createTodo';
import TodoList from './components/todoList/todoList'


class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="appTitle">Fun To-DOne list</div>
          <CreateTodo />
          <div className="flex-container">
              <div className="todo">
                  <TodoList show="all"/>
              </div>
              {/*<div className="done">*/}
                  {/*<TodoList show="done"/>*/}
              {/*</div>*/}
          </div>


      </div>
    );
  }
}

export default App;
