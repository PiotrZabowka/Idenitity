import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field name="email" className="form-control" component="input" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Field
        name="password"
        className="form-control"
        component="input"
        type="password"
      />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
);

// Decorate the form component
export default reduxForm({
  form: 'login', // a unique name for this form
})(LoginForm);
