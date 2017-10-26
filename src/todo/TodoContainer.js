import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default class TodoContainer extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            taskList : []
        };
        this.addTodoItem = this.addTodoItem.bind(this);
        this.onTaskKill = this.onTaskKill.bind(this);
    }

    render(){
        return (
            <div>
                <h2>Here you go with the first things</h2>
                <TaskInput inputRef={el => this.inputElement = el}
                           submit={this.addTodoItem}>

                </TaskInput>
                <TaskList onTaskKill = {this.onTaskKill}
                          taskList = {this.state.taskList}>
                </TaskList>
            </div>
        )
    }
    onTaskKill(taskID){
        let reminder = this.state.taskList.filter((item)=>{
            if(item.taskID !== taskID) return item;
        });

        this.setState({taskList : reminder});
    }

    addTodoItem() {
        this.state.taskList.push({
            taskID:Date.now(),
            taskName: this.inputElement.value
        });
        this.setState({taskList : this.state.taskList});
        this.inputElement.value = "";

    }
}