import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import style from './App.css';
import Header from 'components/Header';
import Bar from 'components/Bar';

class App extends Component {
  render() {
    return (
      <div className={style.root}>
        <Bar />
        <Header>My App</Header>
        Hello world
        <Button>Wow</Button>
        {this.props.children}
      </div>
    );
  }
}

export default App;
