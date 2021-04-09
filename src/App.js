import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './homePage/HomePage';
import Login from './loginPage/Login';
import Signup from './signupPage/Signup';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Signup} />
      </Switch>


    </Router>,
 <SocialFollow></SocialFollow>
 
  )
}

export default App;

     
