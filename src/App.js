import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';
import Settings from './pages/settings';
import { SignUp } from './pages/signup';
import Header from './components/header';
// import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <section className="section is-white">
          <div className="container">
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </section>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
