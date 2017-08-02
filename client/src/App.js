import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchBestScore, postBestScore } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBestScore())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Best score: {this.props.bestScore}</h2>
        </div>
        <button onClick={() => this.props.dispatch(postBestScore(2))}>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bestScore: state.game.bestScore
})

export default connect(mapStateToProps)(App);
