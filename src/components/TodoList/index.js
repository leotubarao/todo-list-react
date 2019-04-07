import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../store/actions/todos";

class TodoList extends Component {
    state = {
        newTodoText: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        if ( this.state.newTodoText.trim().length > 0 )
            this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: "" });
    };
    
    handleDeleteTodo = ( id, event ) => {
        event.preventDefault();

        this.props.deleteTodo(id);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="To do"
                            onChange={e => this.setState({ newTodoText: e.target.value })}
                            value={this.state.newTodoText}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
                <ul className="list-group mt-5">
                    {this.props.todos.map(todo => (
                        <li className="list-group-item" key={todo.id}>
                            {todo.text}
                            <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                onClick={(e) => this.handleDeleteTodo(todo.id, e)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
