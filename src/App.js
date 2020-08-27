import React, { Suspense } from 'react';
import './App.css';
import AppRouter from './Router';
import Loader from './Components/Loader';
import Header from './Components/Header';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loader />}>
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
