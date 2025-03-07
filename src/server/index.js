import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App'
import About from '../components/About'
const app = express();

// 提供静态文件
app.use(express.static('public'));


const renderPage = (title, component) => {
  const content = renderToString(component);
  return `
    <html>
      <head>
        <title>SSR Demo - ${title}</title>
         <link rel="stylesheet" href="/antd.min.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};


app.get('/', (req, res) => res.send(renderPage('Home', <App />)));
app.get('/about', (req, res) => res.send(renderPage('About', <About />)));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});