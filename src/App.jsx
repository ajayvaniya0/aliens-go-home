import { useState } from 'react'
import PropTypes from 'prop-types';
import React, {Component} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h1>{this.props.message}</h1>
    </div>
    </>
  )
}

export default App
