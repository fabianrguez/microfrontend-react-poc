import React, { lazy } from 'react';
import { mount as VueApp } from 'VueRemote/VueApp';
import './App.css';
import { RemoteWrapper } from './components/RemoteWrapper';
import VueComponent from './components/VueComponent';
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
          <div className="container">
            <RemoteApp1Button />
            <RemoteApp1Button label="Label changed from shell App" />
          </div>
        </RemoteWrapper>
        <RemoteWrapper>
          <mcf-app2></mcf-app2>
        </RemoteWrapper>
        <RemoteWrapper>
          <VueComponent component={VueApp} />
        </RemoteWrapper>
      </main>
    </div>
  );
}

export default App;
