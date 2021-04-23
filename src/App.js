import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Exercise, History } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Welcome />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/exercise">
            <Exercise />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
