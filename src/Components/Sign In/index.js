import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { auth, SignInWithGoogle } from '../../Firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Swal from "sweetalert2";
import FormInput from '../FormInput'
import Button from '../Button';
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      Swal.fire({
        title: "Logged In",
        text: "You've successfully loggin in!",
        icon: "success",
        showCancelButton: true,
      });
      this.setState({
        email: '',
        password: '',
    });
    } catch (error) {
      Swal.fire({
        title: "Error logging in",
        text: "Unable to log in to your acount",
        icon: "error",
        showCancelButton: true,
      })
    }
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
            <FormInput
               name='email'
               type='email'
               placeholder='Email address (required)'
               value={this.state.email}
               onChange={this.handleEmailChange}
               required
            />
          </div>  
          <div className='password'>
            <FormInput    
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
          <h4>Don't have an account?</h4>

          <Link to='/register'>
            <Button
              // style={{
              //   background: 'white',
              //   color: 'black',
              //   border: '1px solid black',
              //   marginTop: '-1rem',
              // }}
              isCreateAcount={true}
              value='Create acount'
            />
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
