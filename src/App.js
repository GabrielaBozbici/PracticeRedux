import React, { Component } from 'react';
import {connect} from "react-redux";
import { receiveTodos } from './redux/todo/actions';
import './App.css';

import CreateTodo from './components/createTodo/createTodo';
import TodoList from './components/todoList/todoList'

import {firebaseDb} from './index.js'

class App extends Component {
    componentWillMount () {
        let todoRef = firebaseDb.ref().child(`/todos/`).on('child_added', (snapshot) => {
            this.props.receiveTodos(snapshot.val())
        });
    }
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

function mapStateToProps(state) {
    return {
        myTodos: state.todos.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        receiveTodos: (todos) => dispatch(receiveTodos(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// Component -> action creator -> actiune(obiect cu type si payload) -> reducer ( update state );
