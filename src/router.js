import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import CardDetalhado from './components/CardDetalhado';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/pokemon' component={CardDetalhado}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;