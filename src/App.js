import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './homePage/Homepage';
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
  )

}
export default App;


