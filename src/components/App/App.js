import React, {useState} from 'react';
import AppView from './AppView';

export default function App() {
  const [mode, setMode] = useState('light');

  function toggleMode() {
    setMode(m => (m === 'light' ? 'dark' : 'light'));
  }
  return <AppView mode={mode} toggleMode={toggleMode} />;
}
