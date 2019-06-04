import React from 'react';
import './App.css';
import Facebook from './component/Facebook';

function App() {
  return (
    <div className="App">
        <header className="app-header">
            <h1 className="App-title">Facebook Auth Excample</h1>
        </header>
        <p className="App-intro">
            To get started, authenticate with Facebook
        </p>
        <Facebook  type="primary"/>
    </div>
  );
}

export default App;
