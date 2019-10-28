import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import './App.css';
import VideoApi from "./Components/API/VideoApi"
import Filter from "./Components/Filter/Filter"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment> 
        <Filter />
        <NavBar />
        <div class="clearbox"></div>
        <main className = "Union" >
          <VideoApi />
          <div class="clearbox"></div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
