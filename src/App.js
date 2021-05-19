import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { useSelector } from 'react-redux';


function App() {
  const log = useSelector(state => state);
  console.log(log.user)
  return (
    <div className="App">
       <Router>
      
       


     
            <Switch>
       { Object.keys(log.user).length === 0 && log.user.constructor === Object  ? <Login /> : null }

            <Route exact path='/' component={Login}></Route>
             
              <Route  exact path ='/profile' component={Profile}></Route>
             
            </Switch>
          </Router>
    </div>
  );
}

export default App;
