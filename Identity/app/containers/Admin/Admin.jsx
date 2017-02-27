import React, { Component } from 'react';
import Bar from 'components/Bar';
import style from './Admin.css';

class Admin extends Component {
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

export default Admin;
