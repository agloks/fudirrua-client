import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import './App.css';
import VideoApi from "./Components/API/VideoApi"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment> 
        <NavBar />
        <VideoApi />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
