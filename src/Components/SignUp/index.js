import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { SignInWithGoogle } from "../../Firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Swal from "sweetalert2";
import FormInput from "../FormInput";
import Button from "../Button";
import { auth, createUserDocs } from "../../Firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Wrong password",
        text: "Password dose not match",
        icon: "error",
        showCancelButton: true,
      });
      return;
    } else if (password.length < 6) {
      Swal.fire({
        title: "Password too short",
        text: "Password length should be at of least 6 characters",
        icon: "error",
        showCancelButton: true,
      });
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocs(user, { displayName });
      Swal.fire({
        title: "Signed Up",
        text: "You've successfully Signed Up",
        icon: "success",
        showCancelButton: true,
      });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: " ",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      displayName: e.target.value,
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

  handleConfirmPassChange = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };
  // or we can use one function instead of two handleChangeFunction like below

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signin-container">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <h2 className="heading">Create account</h2>

          <div className="displayName">
            <FormInput
              name="displayName"
              type="text"
              placeholder="Name (required)"
              value={displayName}
              onChange={this.handleNameChange}
              required
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email address (required)"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className="password">
            <FormInput
              name="password"
              type="password"
              placeholder="Password (required)"
              value={password}
              onChange={this.handlePassChange}
              required
            />
          </div>

          <div className="confirm-password">
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password (required)"
              value={confirmPassword}
              onChange={this.handleConfirmPassChange}
              required
            />
          </div>

          <Button type="submit" value="Sign Up" />
          <Button
            onClick={SignInWithGoogle}
            isGoogleSignIn={true}
            value="Sign up with Google"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
