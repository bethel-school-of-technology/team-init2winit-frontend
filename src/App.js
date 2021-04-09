import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './homePage/HomePage';
import Login from './loginPage/login';
import Signup from './signupPage/signup';
import SocialFollow from './SocialFollow';
import Homepage from './homePage/HomePage';
import Login from './loginPage/Login';
import Signup from './signupPage/Signup';
import PrivateRoute from './routing/PrivateRoute';



function App() {


  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Signup} />
      </Switch>
    </Router>
    
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Signup} />
      </Switch>

  )
}

export default App;

     
