import React, { Component } from 'react';
import style from './UserList.css';

class UserList extends Component {
  render() {
    return (
      <div className={style.root}>
        <h1>Users Admin</h1>
        {this.props.children}
      </div>
    );
  }
}

export default UserList;
