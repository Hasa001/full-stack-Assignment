import React from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import HelpCards from './components/HelpCards';
import Footer from './components/Footer';
import HelpCenter from './components/HelpCenter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HelpCenter />
      <Footer />
    </div>
  );
}

export default App;
