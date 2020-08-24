import React, { Suspense } from 'react';
import './App.css';
import AppRouter from './Router';
import Loader from './Components/Loader';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
