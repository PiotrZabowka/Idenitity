import React, { Component } from 'react';
import style from './App.css';
import Bar from 'components/Bar';

class App extends Component {
  render() {
    return (
      <div className={style.root}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
