import React from 'react';
import { Button } from 'antd';

const About = () => {
  return (
    <div className="app-container">
      <h1>About Page</h1>
      <p>This is the About page rendered on the server!</p>
      <Button type="primary">Back to Home</Button>
    </div>
  );
};

export default About;