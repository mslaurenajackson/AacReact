import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '/Users/laurenjackson/Documents/GitHub/GitHub1/aacDeviceBeta/vite-project/src/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
