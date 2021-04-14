import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './homePage/HomePage';
import Login from './loginPage/Login';
import Signup from './signupPage/Signup';
import PrivateRoute from './routing/PrivateRoute';
import Quiz from './homePage/Quiz';



function App() {

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Signup} />
        <Route exact path='/quiz' component={Quiz} /> 
      </Switch>
    </Router>
  )

}
export default App;


