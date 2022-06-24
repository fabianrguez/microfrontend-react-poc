import './App.css';
import React, { lazy } from 'react';
import { RemoteWrapper } from './components/RemoteWrapper';
const RemoteApp1 = lazy(() => import('App1/App1'));
const RemoteApp1Button = lazy(() => import('App1/App1Button'));
lazy(import('App2/App2'));

function App() {
  return (
    <div className="shell-app">
      <header className="shell-app__header">
        <h1>SHELL APP</h1>
      </header>
      <main>
        <RemoteWrapper>
          <RemoteApp1 />
        </RemoteWrapper>
        <RemoteWrapper>
          <RemoteApp1Button />
          <RemoteApp1Button label="Label changed from shell App" />
        </RemoteWrapper>
        <RemoteWrapper>
          <mcf-app2></mcf-app2>
        </RemoteWrapper>
      </main>
    </div>
  );
}

export default App;
