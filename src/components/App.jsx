import React from 'react';
import { Button } from 'antd';
import '../styles/App.less';
const App = () => {
  return (
    <div className="app-container">
      <h1>SSR Demo with React, Antd, and Less</h1>
      <Button type="primary">Click Me!</Button>
    </div>
  );
};

export default App;