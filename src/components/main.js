import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardsIndexComponent from "./cardIndexComponent";
import CardDetailComponent from "./CardDetailComponent";

const Main = () => (
  <main>
    <Switch>
        <Route exact path="/" component={CardsIndexComponent} />
        <Route exact path="/details" component={CardDetailComponent} />
    </Switch>
  </main>
);

export default Main;