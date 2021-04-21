import React, { Component } from 'react';
import DieuHuongUrl from '../dieuhuongurl/DieuHuongUrl';
import Footer from './footer/Footer';
import Home from './header/Home';
import Menu from './menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() { 
    return (
      <div>
          <Router>
              <Menu/>
              <Home/>
              <DieuHuongUrl/>
              <Footer/>
          </Router>
      
      </div>
    );
  }
}
 
export default App;