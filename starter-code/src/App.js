import React from 'react';
import './App.css';
import countries from './countries.json'
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/CountryDetail';

function App() {
  const stilo = {
    maxHeight: "90vh",
    overflow: "scroll"
  }
  return (
    <div className="App">
      <div className="row">
        <div className="col-5" style={stilo}>
          <div className="list-group">
            {
              countries.map((countrie, index) => {
                return (
                    <Link to={`/${countrie.name.common}`} key={index} className="list-group-item list-group-item-action">{countrie.name.common}</Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/:id' component={CountryDetail} />
      </Switch>

    </div>
  );
}

export default App;
