import React from "react";
// import { Route, NavLink, Switch, BrowserRouter} from "react-router-dom";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./util/About";
import Counter from "./components/Counter";
import FetchNews from "./components/FetchNews";
import Form from './components/Form'
import FilterList from './components/FilterList';
import './App.css';
import Header from './util/Header';
import Footer from './util/Footer';
import Layout from './util/Layout';
import ContextForm from './components/HookContext/ContextForm'
import {VideoApp} from "./components/VideoApp";

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
              <NavLink to="/layout">Home</NavLink>
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
              <NavLink to="/contextform">Context Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/videoapp">Video App
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
            <Route path="/" exact component={Layout}>
            </Route>
            <Route path="/counter" exact component={Counter}>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/fetchnews" exact component={FetchNews} />
            <Route path="/form" exact component={Form} />
            <Route path="/filterlist" exact component={FilterList} />
            <Route path="/videoapp" exact component={VideoApp} />
            <Route path="/contextform" exact component={ContextForm} />
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
