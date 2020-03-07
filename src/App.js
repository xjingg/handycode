import React from "react";
// import { Route, NavLink, Switch, BrowserRouter} from "react-router-dom";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./util/About";
import Counter from "./components/Counter";
import FetchNews from "./components/FetchNews";
import Form from './components/Form'
import DataFlow from './components/DataFlow';
import FilterList from './components/FilterList';
import './App.css';
import Header from './util/Header';
import Footer from './util/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
         <Header />
      <BrowserRouter>
        <div className="layout">
          <div className="side">
          <nav>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/fetchnews">Fetch News with Hook
              </NavLink>
            </li>
            <li>
              <NavLink to="/form">Basic Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/filterlist">Filter List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dataflow">Data Flow
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/theme">Context Theme
              </NavLink>
            </li> */}
          </nav>
          </div>
          <div className="content">
          <Switch>
            <Route path="/" exact component={App}>
            </Route>
            <Route path="/counter" exact component={Counter}>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/fetchnews" exact component={FetchNews} />
            <Route path="/form" exact component={Form} />
            <Route path="/filterlist" exact component={FilterList} />
            <Route path="/dataflow" exact component={DataFlow} />
            {/* <Route path="/theme" exact component={Theme} /> */}
          </Switch>
          </div>

          {/* <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
          <Route path="/fetchnews" render={FetchNews} /> */}
        </div>
      </BrowserRouter>
            <Footer />
      </div>
    );
  }
}
