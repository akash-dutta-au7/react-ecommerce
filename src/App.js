import React, { Suspense, Component } from 'react';
import { auth } from './Firebase/firebase.utils';
import './App.css';
import AppRouter from './Router';
import Loader from './Components/Loader';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Suspense fallback={<Loader />}>
          <Header currentUser={this.state.currentUser} />
          <AppRouter />
        </Suspense>
      </div>
    );
  }
}

export default App;
