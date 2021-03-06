import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from "./Menu";
import Users from './Users';
import Posts from './Posts';
import Tasks from './Tasks/index';
import SaveTaks from './Tasks/Save';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <div className="margen">
                <Route exact path='/' component={Users} />
                <Route exact path='/tasks' component={Tasks} />
                <Route exact path='/tasks/save' component={SaveTaks} />
                <Route exact path='/tasks/save/:user_id/:task_id' component={SaveTaks} />
                <Route exact path='/posts/:key' component={Posts} />
            </div>
        </BrowserRouter>
    )
}

export default App;