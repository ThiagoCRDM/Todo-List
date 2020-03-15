import React, { Component } from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'
import { List, Button, Done} from './style';

class ListTodos extends Component {

    done = id => {


    }

    render() {
        const { tasks, handleDelete, handleDone } = this.props;
        return (
            <>
                <List>
                    {
                        tasks.map(
                            tasks => (
                                <li key={tasks.id}>
                                    <Done disabled={tasks.done} onClick={() => {handleDone(tasks.id) }}> Feito </Done>
                                    <span> {tasks.title}</span>
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