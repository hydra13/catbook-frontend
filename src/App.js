import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';
import Settings from './pages/settings';
import SighUp from './pages/signup';
import Header from './components/header';
// import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <section class="section is-white">
        <div class="container">
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
              <SighUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </section>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
