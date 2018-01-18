import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from './../../routes';


let routesObj = [];
for (let index = 0; index < routes.routes.length; index++) {
  routesObj.push(
  <Route key={index} exact path={routes.routes[index].path} component={routes.routes[index].component} />);
}
// console.log("routes Obj", routesObj);
const Main = () => (
  <main>
    <Switch>
        {routesObj}
    </Switch>
  </main>
);

export default Main;