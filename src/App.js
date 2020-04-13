import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeneratePassword from './pages/GeneratePassword';
import ContactUs from './pages/ContactUs';
import LogIn from './pages/LogIn';

import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function App() {

  const handleMyAccount = () => {

  };

  return (
    <div className="App">
      <Router>
        <header>
          <title>Secure Password-Generate password</title>
          <nav>
            <div className="leftNav navSection">
              <div className="businessName">
                Secure Password
            </div>
              <div className="tagLine">
                We are the best in creating secure password!
            </div>
            </div>
            <div className="rightNav navSection">
              <div className="navItem">
                <span>
                  <NavLink exact activeClassName="activePage" className="navLink" to="/">Home</NavLink>
                </span>
              </div>
              <div className="navItem">
                <span>
                  <NavLink activeClassName="activePage" className="navLink" to="/aboutUs">About Us</NavLink>
                </span>
              </div>
              <div className="navItem">
                <span>
                  <NavLink activeClassName="activePage" className="navLink" to="/contactUs">Contact Us</NavLink>
                </span>
              </div>
              <div className="navItem">
                <span onClick={handleMyAccount}>
                  <NavLink activeClassName="activePage" className="navLink" to="myAccount">My Account</NavLink>
                </span>
              </div>
            </div>
          </nav>
        </header>
        <Switch>
          <div className="page">
            <Route exact path="/" component={GeneratePassword} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/myAccount" component={LogIn} />
            {/* <Route component={NotFound} /> */}
          </div>
        </Switch>
        <footer>
          &copy; 2020 Poonam
        </footer>
      </Router>
    </div>
  );
}

export default App;
