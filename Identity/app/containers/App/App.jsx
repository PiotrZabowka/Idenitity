import React, { Component } from 'react';
import style from './App.css';
import Bar from 'components/Bar';

class App extends Component {
  render() {
    return (
      <div className={style.root}>
        <Bar />
        <div className={style.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
