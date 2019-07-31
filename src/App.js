import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './store/actions/counter';

import './App.css';
import Button from './components/Button';
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col">
            <h4 className="h4">Value from standard Redux Flow</h4>
          </div>
          <div className="col">
            <div className="output">
              <h4 className="h4">{this.props.value}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="h4">Value from Redux Observable</h4>
          </div>
          <div className="col">
            <div className="output">
              <h4 className="h4">{this.props.message}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col call-to-action">
            <Button handleClick={this.props.increment}>INCREMENT</Button>
          </div>
          <div className="col call-to-action">
            <Button handleClick={this.props.decrement}>DECREMENT</Button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  value: state.counter.value,
  message: state.flash.message,
});

const mapDispatchToProps = {
  increment: incrementCount,
  decrement: decrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
