import React, {Component} from 'react';

class FormPlayground extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const task = event.target.elements.task.value;
        if(task){
            const taskId = this.props.tasks.length++;
            const taskAdded = {
                id: taskId,
                description: task
            }
            this.props.addTask(taskAdded);
        }
    }
    render(){
        return(
            <div id="form_pg">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="task" />
                    <button type="submit">Submit Task</button>
                </form>
            </div>
        )
    }
}
export default FormPlayground;