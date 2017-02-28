import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Bar from 'components/Bar';
import style from './Admin.css';

const Admin = ({ children, isAuthenticated, userName }) => (
  <div className={style.root}>
    <Bar isAuthenticated={isAuthenticated} userName={userName} />
    <div className={cn(style.container, 'container')}>
      {children}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userName: state.auth.userName,
  children: ownProps.children,
});
export default connect(mapStateToProps)(Admin);
