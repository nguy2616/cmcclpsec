import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', }}>
      {/*<Link to="/client">Client</Link> <br/>
      <Link to="/dashboard">Dashboard</Link>*/}
      <button style={{
        backgroundColor: 'skyblue',
        width: '100px'
      }}><Link to="/client">Client</Link></button>
      <button  style={{
        backgroundColor: 'orange',
        width: '100px'
      }}><Link to="/dashboard">Dashboard</Link></button>
    </div>

  );
}

export default  HomePage;
