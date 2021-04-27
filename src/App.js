import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './homePage/HomePage';
import Login from './loginPage/Login';
import Signup from './signupPage/Signup';
import PrivateRoute from './routing/PrivateRoute';
import Quiz from './homePage/Quiz';
import Generator from './Generator/Generator';
import Googlemaps from './googlemaps/Googlemaps';
import Find from './Generator/Find';
import SharePage from './SharePage/SharePage';
import ShareAdd from './SharePage/ShareAdd';



function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Signup} />
        <PrivateRoute exact path='/quiz' component={Quiz} />
        <PrivateRoute exact path='/generator' component={Generator} />
        <PrivateRoute exact path='/find' component={Find} />
        <PrivateRoute exact path='/map' component={Googlemaps} />
        <PrivateRoute exact path='/share' component={SharePage} />
        <PrivateRoute exact path='/share-add' component={ShareAdd} />
      </Switch>
    </Router>
  )

}
export default App;


