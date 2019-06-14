import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
      </header>
    </div>
  )
}

const linkStyle = {
  color: '#fff'
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
