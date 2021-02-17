import { Route, Switch } from "react-router-dom";
import Header from "./Componentes/Header";
import Home from "./Componentes/pages/Home";
import Login from "./Componentes/pages/Login";
import Carrinho from "./Componentes/pages/Carrinho";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro" exact component={Login} />
    <Route path="/carrinho" exact component={Carrinho} />
  </Switch>
);
export default Routes
