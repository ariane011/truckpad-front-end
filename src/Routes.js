import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastrar from './pages/Cadastrar'
import Editar from './pages/Editar'

const Home = React.lazy(() => import('./pages/Home'));
// const CadastroMotorista = React.lazy(() => import('./pages/CadastroMotorista'));

const Routes = () => (

            <Switch>
                <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
                <Route path='/cadastrar' component={Cadastrar} />
                <Route path='/editar' component={Editar} />
                {/* <Route exact path='/cadastrar-motorista' component={routerProps => <CadastroMotorista {...routerProps} />} /> */}
            </Switch>

)

export default Routes;