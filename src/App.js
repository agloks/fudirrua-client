import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import './App.css';
import VideoApi from "./Components/API/VideoApi"
import Filter from "./Components/Filter/Filter"
import {Route, Switch} from "react-router-dom"
import VideoApiFilter from "./Components/API/VideoApiFilter"
import VideoPlayer from "./Components/API/VideoPlayer"

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <React.Fragment> 
        <NavBar />
        <div class="clearbox"></div>
        <main className = "Union" >
          <Switch>
            <Route exact path="/">
              <Filter />
              <VideoApi />
            </Route>
            <Route exact path="/filters">
              <Filter />
              <VideoApiFilter />
            </Route>
            <Route path="/video/player/:idyou" component={VideoPlayer} />
          </Switch>
          <div class="clearbox"></div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
