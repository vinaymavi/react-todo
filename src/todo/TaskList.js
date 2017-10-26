import React from 'react';
import Task from "./Task";

export default class TaskList extends React.Component{

    render(){
        return (
            <div className="taskList">
                <h3>Task List</h3>
                {
                    this.props.taskList.map((item) => {
                        return (<Task key={item.taskID} taskID ={item.taskID} taskName={item.taskName} onTaskKill={this.props.onTaskKill} ></Task>)
                    })
                }
            </div>
        );
    }
}