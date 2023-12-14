import React from 'react';
import Home from './pages/Home';
import Header from './components/Header'
// import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
