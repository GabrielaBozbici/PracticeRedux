import React, { Component } from 'react';
import './todoItem.css';

export default class TodoItem extends Component {
    render() {
        let { todo } = this.props
        return (
            <li>
                <div className="TodoItem">
                    <p>{todo.text}</p>
                    <p>{new Date(todo.date).toString()}</p>
                    <p>{todo.category}</p>
                </div>
            </li>
        );
    }
}
