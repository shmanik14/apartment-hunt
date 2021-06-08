import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApartmentDetails from './components/Home/ApartmentDetails/ApartmentDetails';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ApartmentsForRent from './components/ApartmentsForRent/ApartmentsForRent';


function App() {
  return (
    <Provider store = {store}>
      <div className="main">
        <Router>
          <Switch>apartments
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/apartments">
              <ApartmentsForRent></ApartmentsForRent>
            </Route>
            <Route path="/apartment/:id">
              <ApartmentDetails />
            </Route>            
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
