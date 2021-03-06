import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FirebaseConfig = {
  apiKey: 'AIzaSyDENX6VL0mkQyrWnEEj03U7e_GD2keRej0',
  authDomain: 'ecommerce-db-11649.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-11649.firebaseio.com',
  projectId: 'ecommerce-db-11649',
  storageBucket: 'ecommerce-db-11649.appspot.com',
  messagingSenderId: '247918185398',
  appId: '1:247918185398:web:6ce6fa24802eb841780f17',
  measurementId: 'G-S4RD4BV4TW',
};

export const createUserDocs = async (userAuth, additionaldata) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapShot = await userRef.get()
  if(!userSnapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionaldata
      })
    } catch (error) {
      console.log("Error is", error.message)
    }
  }
  return userRef;
}


firebase.initializeApp(FirebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
