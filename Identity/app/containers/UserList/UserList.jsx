import React, { Component, PropTypes } from 'react';
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
UserList.propTypes = {
  children: PropTypes.node,
};
UserList.defaultProps = {
  children: null,
};
export default UserList;
