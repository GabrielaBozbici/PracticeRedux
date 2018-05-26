import React, { Component } from 'react';
import TodoItem from '../todoItem/todoItem'
import './todoList.css';
import {connect} from "react-redux";



class TodoList extends Component {
    render() {
        // let { allToDos } = this.props;
        return (
            <div className="TodoList">
                <ol>
                  {this.props.allToDos.map((todo, id) => {return <TodoItem todo={todo} key={id}/>})}
                </ol>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allToDos: state.todos.list
    }
}
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

