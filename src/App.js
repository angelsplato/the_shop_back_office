import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Application from './components/Application'
import UserProvider from './providers/UserProvider'

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
