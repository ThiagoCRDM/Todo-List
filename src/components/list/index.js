import React, { Component } from 'react';
import {FaRegTrashAlt, } from 'react-icons/fa';
import { List, Button, Done, Pending} from './style';

class ListTodos extends Component {


    render() {
        const { tasks, handleDelete, handleDone } = this.props;
        return (
            <>
                <List>
                    {
                        tasks.map(
                            tasks => (
                                <li key={tasks.id}>
                                    {
                                       tasks.done ? (<Done  done={tasks.done} onClick={() => {handleDone(tasks.id) }}> Done </Done> ) :
                                      (<Pending  done={tasks.done} onClick={() => {handleDone(tasks.id) }}> Pending </Pending>)
 
                                    }
                                    {tasks.done ? ( <span><strike> {tasks.title}</strike></span>) :( <span> {tasks.title}</span>)}
                                    
                                    <Button onClick={() => { handleDelete(tasks.id) }}> <FaRegTrashAlt /> </Button>
                                </li>
                            )
                        )
                    }
                </List>
            </>
        );
    }


}


export default ListTodos;