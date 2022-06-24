import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app2">
      <h2>
        App2 from Web Component using React
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
      </h2>
    </div>
  );
}

// class App2 extends HTMLElement {
//   connectedCallback() {
//     console.log('connecting App2');
//     const root = ReactDOM.createRoot(this);
//     root.render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     );
//   }
// }

// export default (() => {
//   console.log('defining web component');
//   customElements.define('mcf-app2', App2);
// })()
