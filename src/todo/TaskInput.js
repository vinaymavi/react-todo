import React from 'react';

export default class TodoContainer extends React.Component{

    render(){
        return (
            <div className="task-input">
                <input ref={this.props.inputRef}
                       placeholder = "Enter task description" />
                <button type="submit" onClick={this.props.submit}>Add Task</button>
            </div>
        )
    }
}