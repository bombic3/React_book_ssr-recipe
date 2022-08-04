import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root0 = document.getElementById('root');
const root = createRoot(root0);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // document.getElementById('root')
);