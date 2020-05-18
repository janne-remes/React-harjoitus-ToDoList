import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#FDD',
            padding: '10px',
            borderBottom: '1px #000 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        
        /*if (this.props.todo.completed){
            return {
                textDecoration: 'line-through'
            }
        }

        else {
            return {
                textDecoration: 'none'
            }
        }*/
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
