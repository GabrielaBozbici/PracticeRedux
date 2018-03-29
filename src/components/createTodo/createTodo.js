import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/actions'
import './createTodo.css';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class CreateTodo extends Component {

    constructor(){
        super();
        this.state={
            inputValue: ""
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

        //fa un obiect care sa repreznte itemul de to do text cu data cu done sau nu
        this.props.addTodo({
            text: inputValue,
            category: 'undone',
            date: new Date().getTime()
        })

        console.log("valoarea la submit: ", inputValue)
    }
    render() {
        return (
            <div className="CreateTodo">
                <div className="wraper">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text"
                             placeholder="Type here your to-do's"
                             value={this.state.inputValue}
                             onChange={this.handleChange.bind(this)}
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
        addTodo: (todo) => dispatch(addTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
