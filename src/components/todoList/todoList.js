import React, { Component } from 'react';
import './todoList.css';



export default class TodoList extends Component {



    render() {
        let sepa = this.props
        console.log(this.props)

        return (
            <div className="TodoList">
                todo list
            </div>
        );
    }
}
