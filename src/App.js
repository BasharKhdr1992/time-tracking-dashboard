import React from 'react';
import './App.css';
import TimeDashboard from './components/TimeDashboard';
import Appendix from './components/Appendix';

const App = () => {
  return (
    <div className="wrapper">
      <TimeDashboard />
      <Appendix />
    </div>
  );
};

export default App;
