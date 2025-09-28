import React from 'react';
import './App.css';
import StaticLanding from './pages/StaticLanding';

// PUBLIC_INTERFACE
function App() {
  /** The main application now renders the StaticLanding screen as the default view. */
  return (
    <div className="App">
      <StaticLanding />
    </div>
  );
}

export default App;
