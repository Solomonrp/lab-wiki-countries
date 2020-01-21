import React, {Component} from 'react';
import countries from '../countries.json'


class CountryDetail extends Component {
  
  render() {
    const test = (id) => {
      return countries.name.common.find(id);
    }
    
    const { params } = this.props.match;
    // const details = test(params)
    console.log(params.id);
    console.log(countries.name.common.find(params.id));
    
    return (
      <div>
        <div className="col-7">
          <h1>{params.id}</h1>
        </div>    
      </div>
    )
  }
}

export default CountryDetail;

