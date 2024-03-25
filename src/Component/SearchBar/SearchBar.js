import React, { Component } from 'react';
import '../SearchBar/SearchBar.css';
import spinner from '../../img/spinner.gif';

class SearchBar extends Component {
  state = {
    cont: '',
    spin: ''
  };

  CountryHandler = () => {
    let d = this.props.options.Countries.find(el => {
      return el.Country === this.state.cont;
    });
    this.setState({ spin: <img src={spinner} alt="Loading..." className='spinner' /> });

    setTimeout(() => {
      this.setState({ spin: '' });
      this.props.selectCountry(d);
    }, 3000);
  };

  handleSelectCountry = (e) => {
    this.setState({ cont: e.target.value });
  };

  render() {
    const optionsLoad = this.props.options;
    let option;
    option = optionsLoad.Countries ? optionsLoad.Countries.map((el, i) => {
      return <option key={i}>{el.Country}</option>;
    }) : null;

    return (
      <>
        <span className='date'>{optionsLoad.Date ? optionsLoad.Date.slice(0, 10) : ''}</span>
        <select className="select" onChange={this.handleSelectCountry}>
          <option>--Select--</option>
          {option}
        </select>
        <button onClick={this.CountryHandler} className="sub">Search</button><br></br>
        {this.state.spin}
      </>
    );
  }
}

export default SearchBar;
