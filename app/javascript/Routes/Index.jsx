import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from '../components/Recipes';
import Board from "../components/Board";
import SimpleSortableList from "../components/SimpleSortableList";
import BeautifulDnD from "../components/BeautifulDnD";

export default (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path='/react-dnd' exact component={Board} /> 
      <Route path="/simple-list-sort" exact component={SimpleSortableList} />
      <Route path="/beautiful-dnd" exact component={BeautifulDnD} />
    </Switch>
  </Router>
);