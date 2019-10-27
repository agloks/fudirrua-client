import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return( 
      <NavBar />
    )
  }
}

export default App;
