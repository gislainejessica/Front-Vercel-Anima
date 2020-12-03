import React from 'react';

import logo from './assets/logo.svg';
import avatar from './assets/avatar.svg';
import button from './assets/special-button.svg';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <header>
          <h1 className="left">
            <img src={logo} alt="Logo" />
          </h1>

          <nav className="middle">
            <ul>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>

          <div className="right">
            <a className="conf">
              <img src={button} alt="Special Conference" />
              <span>Special Conf</span>
            </a>

            <img className="avatar" src={avatar} alt="Avatar" />
          </div>
        </header>
        <main>
          <h1>
            <span>Develop.</span>
            <span>Preview.</span>
            <span>Ship.</span>
          </h1>

          <div className="buttons">
            <button className="main"> Start deploying</button>
            <button className="outlined">Get a demo</button>
          </div>

          <h2>
            Vercel combines the best developer experience with an obsessive focus on end-user performance.
            Our platform enables frontend teams to do their best work.
            </h2>

        </main>
        <footer>Explore the Vercel way</footer>
      </div>

    </div>
  );
}

export default App;
