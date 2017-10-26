import React from 'react';

export default class Task extends React.Component{

    render(){
        return (
            <div className="task">
                <div>{this.props.taskName}</div>
                <button onClick={() => this.props.onTaskKill(this.props.taskID)}>Remove</button>
            </div>
        )
    }
}