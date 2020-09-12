import React, { Suspense, Component } from "react";
import { setCurrentUser } from "./Redux/Actions/";
import { connect } from "react-redux";
import { auth, createUserDocs } from "./Firebase/firebase.utils";
import "./App.css";
import AppRouter from "./Router";
import Loader from "./Components/Loader";
import Header from "./Components/Header";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocs(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Header />
          <AppRouter />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //here 'user' in setCurrentUser(user) is actually the payload we passed in setCurrentUser action function in action
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
