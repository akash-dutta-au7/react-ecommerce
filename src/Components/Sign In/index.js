import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { SignInWithGoogle } from '../../Firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../Button';
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
          <Button type='submit' value='Sign In' />
          <Button
            onClick={SignInWithGoogle}
            isGoogleSignIn={true}
            value='Google'
          />
          {/*<Button
            onClick={SignInWithGoogle}
            isGoogleSignIn={true}
            value='Google'
        /> */}
          <h4>Don't have an account?</h4>

          <Link to='/register'>
            <Button
              style={{
                background: 'white',
                color: 'black',
                border: '1px solid black',
                marginTop: '-1rem',
              }}
              value='Create acount'
            />
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
