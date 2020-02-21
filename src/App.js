import React from 'react';
import logo from './logo.svg';
import './App.css';
import './PasswordModal.css';
import  GeneratePasswordPage from './GeneratePasswordPage';

function App() {
  return (
    <div className="App">
      <header>
        <title>Secure Password-Generate password</title>
        <nav>
          <ul>
            <li>
              <a href="" className="current">Generate password</a>
            </li>
            <li>
              <a href="">My account</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <GeneratePasswordPage></GeneratePasswordPage>
      </body>
      <footer>
        &copy; 2020 Poonam
      </footer>

    </div>
  );
}

export default App;
