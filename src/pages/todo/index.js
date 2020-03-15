import React, { Component } from "react";

import { Container } from './styles';
import Formik from '../../components/form';
import List from '../../components/list';

class TodoLuby extends Component {


    state = {
        tasks: []
    }

    componentDidMount() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.setState({
                tasks: JSON.parse(tasks)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState !== this.state.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        }
    }

    handleSubmit = e => {

        const { task } = e;

        this.setState({
            tasks: [...this.state.tasks, {
                id: new Date().getTime().toString(),
                title: task,
                done: false
            }]
        })
    }

    handleDelete = id => {
        this.setState({ tasks: [...this.state.tasks.filter(t => t.id !== id)] })
    }

    handleDone = id =>{
        const taskDone = this.state.tasks.filter(t => t.id === id);

   

        taskDone[0].done ? taskDone[0].done = false : taskDone[0].done = true;

        this.setState({
            tasks: [...this.state.tasks.filter(t => t.id !== id), taskDone[0]]
        })

    }

    render() {

        return (
            <Container>
                <h1> Todo List Luby</h1>
                <Formik
                    initialValues={{ task: '' }}
                    handleSubmit={this.handleSubmit}
                />

               <List
                tasks={this.state.tasks}
                handleDelete={this.handleDelete}
                handleDone={ this.handleDone}
               
               />
            </Container>
        )
    }
}


export default TodoLuby;
