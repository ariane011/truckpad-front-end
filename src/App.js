import React from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main id="main">
      <Routes />
    </main>
    {/* // <Footer /> */}
    </>
  );
}

export default App;
