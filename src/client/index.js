import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 使用新 API
import App from '../components/App';
import About from '../components/About';

// 根据当前 URL 选择组件
const getComponent = () => {
  const path = window.location.pathname;
  if (path === '/about') {
    return <About />;
  }
  return <App />;
};
// React 18 的 hydrate 方式
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(getComponent());