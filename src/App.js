import './App.css';
import Login from './login/login';
import Register from './login/register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import ProtectedRoute from './Routing/ProtectedRoute';
import { Provider } from 'react-redux'
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact={true} path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
