import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import CadastroMotorista from './pages/CadastroMotorista'

const Home = React.lazy(() => import('./pages/Home'));
// const CadastroMotorista = React.lazy(() => import('./pages/CadastroMotorista'));

const Routes = () => (

            <Switch>
                <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
                <Route path='/cadastrar' component={CadastroMotorista} />
                {/* <Route exact path='/cadastrar-motorista' component={routerProps => <CadastroMotorista {...routerProps} />} /> */}
            </Switch>

)

export default Routes;