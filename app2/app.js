import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import './src/index.css';

class App2 extends HTMLElement {
  connectedCallback() {
    console.log('connecting App2');
    const root2 = ReactDOM.createRoot(this);
    root2.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

export default (() => {
  console.log('defining web component');
  customElements.define('mcf-app2', App2);
})();
