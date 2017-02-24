import React, {Component} from 'react';
import style from './ClientList.css';

class ClientList extends Component {
  render() {
    return (
      <div className={style.root}>
        <h1>Clients Admin</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ClientList;
