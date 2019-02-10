import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

import ClientSession from "./services/client-session.js"

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valid:true
    };
    this.getCurrentUserRole();
  }

  getCurrentUserRole() {
    ClientSession.getAuth((err, value) => {
      if (!value) {
        this.setState({valid:false})
      }
    });
  }

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
          {this.state.valid ? <Route path="/" name="Home" component={DefaultLayout} /> : <Route path="/" name="Home" component={Login} />}
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
