import React from 'react';
import './App.css';

import { Header, Footer, FloatingNavi } from './components';
import { Start, Value, Service, Tech, Team } from './sections';

function App() {
  return (
    <div className="App">
      <Header />

      <Start />
      <Value />
      <Service />
      <Tech />
      <Team />

      <Footer />
      <FloatingNavi />
    </div>
  );
}

export default App;
