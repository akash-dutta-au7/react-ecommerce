import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    alert(`${this.state.email}`);
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  //or we can use one function instead of two handleChangeFunction like below

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <div className='signin-container'>
        <form className='form-group' onSubmit={this.handleSubmit}>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>
          <h2 className='heading'>Sign in to your Dropshop account</h2>
          <div className='email'>
            <input
              name='email'
              type='email'
              placeholder='Email address (required)'
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className='password'>
            <input
              name='password'
              type='password'
              placeholder='Password (required)'
              value={this.state.password}
              onChange={this.handlePassChange}
              required
            />
          </div>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
