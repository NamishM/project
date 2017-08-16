import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import StoredProcedures from './components/storedProcs/StoredProcedures.jsx';
import Tables from './components/tables/Tables.jsx';
import Triggers from './components/triggers/Triggers.jsx';
import Functions from './components/functions/Functions.jsx';
import Views from './components/views/Views.jsx';
import TableTypes from './components/tableTypes/TableTypes.jsx';
import NavBar from './components/NavBar';
import AvailableDatabases from './components/AvailableDatabases';

class App extends Component {
  render() {
    return (
      <Router basename="/dbdoc">
        <div>
          <NavBar />
          <div className="results">
            <Route exact path="/" component={AvailableDatabases}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={Tables}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={Views}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={StoredProcedures}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={Functions}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={Triggers}/>
            <Route path="/:instance/:schema?/:procedure?/:param?" component={TableTypes}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
