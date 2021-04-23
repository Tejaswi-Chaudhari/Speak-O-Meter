import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Welcome, Contact, Review, History, Practice } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Welcome />
            <br />
            <Review />
            <br />
            <Practice/>
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route exact path="/exercise">
            <Header />
            <Practice />
          </Route>
          <Route exact path="/history">
            <Header />
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
