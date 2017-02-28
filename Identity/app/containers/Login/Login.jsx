import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/LoginForm';
import { requestLogin } from 'modules/auth';
import style from './Login.css';

class Login extends Component {
  render() {
    return (
      <div className={`${style.root} container`}>
        <div className="panel col-sm-4 col-sm-offset-4">
          <h1>Login to Identity</h1>
          <LoginForm onSubmit={this.props.onLogin} />
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onLogin: (values) => {
    dispatch(requestLogin(values));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
