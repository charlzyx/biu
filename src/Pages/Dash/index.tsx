import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import Counter from '@/Lego/Counter';


const Dash: FunctionComponent<RouteComponentProps> = () => (
  <div>
    <Link to="/">back to Home</Link>
    <div>rematch demo</div>
    <Counter />
  </div>
);


export default Dash;
