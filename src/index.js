import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AuthProvider>
      <App />
      
    </AuthProvider>
  
);

const cacheName = 'dynamic-agent-v1';

const src = "https://www.jotform.com/s/umd/724b97c387f/for-embedded-agent.js";
const script = document.createElement('script');
script.src = src;
script.async = true;
script.onload = function() {
  window.AgentInitializer.init({
    agentRenderURL: "https://www.jotform.com/agent/0196f25c4c637b9da8437461fae734722277",
    rootId: "JotformAgent-0196f25c4c637b9da8437461fae734722277",
    formID: "0196f25c4c637b9da8437461fae734722277",
    queryParams: ["skipWelcome=1","maximizable=1","skipWelcome=1","maximizable=1'"],
    domain: "https://www.jotform.com",
    isDraggable: false,
    background: "linear-gradient(180deg, #EBF5FF 0%, #F8D4F1 100%)",
    buttonBackgroundColor: "#0A1551",
    buttonIconColor: "#FFF",
    variant: false,
    customizations: {"greeting":"Yes","greetingMessage":"Hello! \ud83d\udc4b Welcome to Vishesh Country Cache. How can we assist you?","openByDefault":"No","pulse":"Yes","position":"right","autoOpenChatIn":"0"},
    isVoice: false,
  });
};
document.head.appendChild(script);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
