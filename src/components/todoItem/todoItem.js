import React, { Component } from 'react';
import { editTodo } from '../../redux/todo/actions';
import { deleteTodo } from '../../redux/todo/actions';
import { editDone } from '../../redux/todo/actions'
import './todoItem.css';

import Checkbox from 'material-ui/Checkbox';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from "react-redux";

class TodoItem extends Component {
    componentWillMount(){
        let { todo } = this.props
        this.setState({
            todoText: todo.text,
            open: false,
            checked: false
        })
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }


    handleEdit =(e) => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSubmit = ()=> {
        let { todo } = this.props
        this.setState({open: false});
        this.props.editTodo({
            text: this.state.todoText,
            done: false,
            date: new Date().getTime(),
            id: todo.id
        })

    }

    handleDelete = () => {
        let { todo } = this.props;
        this.props.deleteTodo(todo)
    }

    updateCheck() {
        let { todo } = this.props;
        console.log('Item:', todo)
        this.setState({
            checked: !this.state.checked
        }, ()=> {
            console.log('state is updated: ', this.state.checked)
            this.props.editDone({
                text: todo.text,
                done: this.state.checked,
                date: new Date().getTime(),
                id: todo.id
            })
        }
      );
    }


    render() {
        const actions = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleClose}/>,
            <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleSubmit}/>,
        ];
        const styles = {
            width: 'auto',
        };
        let { todo } = this.props

        return (
            <div>
                <li>
                    <div className="TodoItem">
                        <h1>{this.state.speed}</h1>
                        <div className={`${this.state.checked ? 'checked' : ''}`}>
                            <p>{todo.text}</p>
                            {/*<p>{new Date(todo.date).toString()}</p>*/}
                        </div>
                        <Checkbox
                            style={styles}
                            checked={this.state.checked}
                            onClick={this.updateCheck.bind(this)}
                        />
                        {/*<div><p>{todo.category}</p></div>*/}
                        <div>
                            <button onClick={this.handleOpen.bind(this)}>Edit</button>
                        </div>
                        <div>
                            <button onClick={this.handleDelete.bind(this)}>X</button>
                        </div>
                    </div>

                </li>
                <div>
                    <Dialog
                        title="Edit your to-DO"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <input type="text" value={this.state.todoText}
                        onChange={(e) => this.handleEdit(e)}/>
                    </Dialog>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        editTodo: (todoEdited) => dispatch(editTodo(todoEdited)),
        deleteTodo: (todoToDelete) => dispatch(deleteTodo(todoToDelete)),
        editDone: (todoDone) => dispatch(editDone(todoDone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
