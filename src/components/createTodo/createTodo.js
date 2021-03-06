import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/actions'
import './createTodo.css';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {orange500} from 'material-ui/styles/colors';

import {firebaseDb} from '../../index.js'


class CreateTodo extends Component {

    constructor(){
        super();
        this.state={
            inputValue: "",
            inputError: false
        }
    }

    handleChange =(e) =>{
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = this.state.inputValue
        this.setState({
            inputValue: ""
        })
        if (inputValue !== "") {
            const todo = {
                text: inputValue,
                done: false,
                date: new Date().getTime(),
                id: new Date().getTime()
            };
            // this.props.addTodo(todo);

            let todoRef = firebaseDb.ref().child(`/todos/`).push();
            let key = todoRef.getKey();
            todo.id = key;
            todoRef.set(todo)
        }
            // console.log("valoarea la submit: ", inputValue)

    }
    render() {
        const styles = {
            underlineStyle: {
                borderColor: orange500
            }
        }
        // console.log('propurile componentului: ', this.props)
        return (
            <div className="CreateTodo">
                <div className="wraper">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <TextField
                            value={this.state.inputValue}
                            onChange={this.handleChange.bind(this)}
                            floatingLabelText="Type here your to-do's"
                            underlineFocusStyle={styles.underlineStyle}
                            errorText={this.state.inputError ? 'The input is empty!' : ''}
                        />
                        <FloatingActionButton mini={true} type="submit">
                            <ContentAdd />
                        </FloatingActionButton>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        // addTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
