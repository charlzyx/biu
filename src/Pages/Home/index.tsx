import React, { Component } from 'react';
import { Link, RouteComponentProps } from '@reach/router';

class Home extends Component<RouteComponentProps, {}> {
  public render() {
    return (
      <div>
        <h1>biu</h1>
        <Link to="dash"><div>To Dash</div></Link>
      </div>
    );
  }
}

export default Home;
