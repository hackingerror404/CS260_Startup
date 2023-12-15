import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
      <header>
        <div className="header-container">
            <div className="p-container">
                <p>The Movie Shelf</p>
            </div>

            <div className="links-container">
                <a href="index.html">Login</a>
                <a href="home.html">Home</a>
                <a href="shelf.html">Your Shelf</a>
                <a href="edit-shelf.html">Edit Shelf</a>
            </div>
        </div>
      </header>

      <main>App components go here</main>

      <footer>
        <span className="text-reset">Jayden Hacking</span>
        <br />
        <a href="https://github.com/hackingerror404/CS260_Startup">GitHub</a>
      </footer>
    </div>
  );
}