import React, { Component } from 'react';
import style from './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div className={style.root}>
        {this.props.children}
      </div>
    );
  }
}

export default Admin;
