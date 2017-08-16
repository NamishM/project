import React from 'react';
import Headroom from 'react-headroom';
import {
  Link,
} from 'react-router-dom';
import logo from '../logo.svg';

const linkStyle = {
  lineHeight:'50px',
  textDecoration:'none'
}

const NavBar = ({children}) => (
  <Headroom
    style={{
      height:'50px',
      padding:'4px',
      display:'flex',
      justifyContent: 'space-between'
    }}
  >
    <div>
      <img
        src={logo}
        alt="logo"
        style={{
          height:'40px',
          marginTop:'5px',
        }}
      />
      <h1
        style={{
          display:'inline-block',
          border:'none',
          lineHeight:'50px',
          height:'50px',
          margin:'0 0 0 10px',
          verticalAlign:'top'
        }}
      >DbDoc</h1>
    </div>
    <div>
      <Link style={linkStyle} to={`/`}>Databases</Link>
    </div>
  </Headroom>
);

export default NavBar;
