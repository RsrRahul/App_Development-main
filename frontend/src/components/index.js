import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import CompanyProfile from './components/CompanyProfile';
import Detail from './components/Detail'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={CompanyProfile} />
        <Route path="/company/:name" component={Detail} /> {/* Updated route */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
