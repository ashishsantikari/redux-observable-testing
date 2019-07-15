import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './store/actions/counter';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <label>{this.props.value}</label>
        <br/>
        <button onClick={this.props.increment} >INCREMENT BY 1</button>
        <button onClick={this.props.decrement} >DECREMENT BY 1</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  value : state.counter.value
});

const mapDispatchToProps = {
  increment: incrementCount,
  decrement: decrementCount,
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
