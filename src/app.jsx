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
                <NavLink className="nav-link" to="">Login</NavLink>
                <NavLink className="nav-link" to="home">Home</NavLink>
                <NavLink className="nav-link" to="shelf">Your Shelf</NavLink>
                <NavLink className="nav-link" to="edit-shelf">Edit Shelf</NavLink>
            </div>
        </div>
      </header>

      <main>App components go here</main>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/home' element={<Home />} />
        <Route path='/shelf' element={<Shelf />} />
        <Route path='/edit-shelf' element={<Edit-Shelf />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <span className="text-reset">Jayden Hacking</span>
        <br />
        <a href="https://github.com/hackingerror404/CS260_Startup">GitHub</a>
      </footer>
    </div>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}