import React, { Suspense, Component } from 'react';
import { auth, createUserDocs } from './Firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserDocs(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({currentUser: userAuth})
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
