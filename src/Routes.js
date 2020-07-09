import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'
import Editar from './pages/Editar'
import Inativos from './pages/Inativos'
const Routes = () => (

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cadastrar' component={Cadastrar} />
                <Route path='/editar/:id' component={Editar} />
                <Route path='/motoristas-inativos' component={Inativos} />
            </Switch>

)

export default Routes;