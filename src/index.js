import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/background';
import Toggle from './components/ThemeToggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
      <div className="absolute right-16 md:right-[620px] z-50 top-0 mr-4 mt-6 md:mr-6 md:mt-6">
            <Toggle />
          </div>
    <App />
    </Background>
    </ThemeProvider>,
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
