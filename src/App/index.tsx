import React, { Component, ReactNode } from 'react';
import { Router } from '@reach/router';
import './index.css';
import { Home, Dash } from '../Pages';

class App extends Component<{}, {}> {

  public render(): ReactNode {
    return (
      <Router>
        <Home path="/" />
        <Dash path="dash" />
      </Router>
    );
  }
}

export default App;
