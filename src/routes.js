import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import TodoLuby from './pages/todo';


export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TodoLuby} />
            </Switch>
        </BrowserRouter>
    );
}