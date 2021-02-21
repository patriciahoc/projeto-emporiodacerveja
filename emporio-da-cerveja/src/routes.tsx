import { Route, Switch } from "react-router-dom";

import Home from "./Componentes/pages/Home";
import Login from "./Componentes/pages/Login";
import Carrinho from "./Componentes/pages/Carrinho";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/bebidas" exact component={Home} />
    <Route path="/carrinho" exact component={Carrinho} />
  </Switch>
);
export default Routes;
