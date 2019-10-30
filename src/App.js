import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import './App.css';
import VideoApi from "./Components/API/VideoApi"
import Filter from "./Components/Filter/Filter"
import {Route, Switch} from "react-router-dom"
import VideoApiFilter from "./Components/API/VideoApiFilter"
import VideoPlayer from "./Components/API/VideoPlayer"
import VideoCards from "./Components/API/VideosCards"
import Login from "./Components/Auth/Login"
import Logout from "./Components/User/UserLogout"
import Signup from "./Components/Auth/Signup"
import UserInfo from "./Components/User/UserInfo"
import AuthService from "./Components/Auth/AuthUser"
import ProtectedRoute from "./Components/Auth/ProtectAuth"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultFromFilter: [],
      user: null,
    }
    this.service = new AuthService();
    this.filterCall = this.filterCall.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  fetchUser() {
    if (this.state.user === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            user: response
          });
        })
        .catch(err => {
          this.setState({
            user: false
          });
        });
    }
  }

  getUser(rest) {
    console.log(rest)
    this.setState({
      user: rest
    })
  }

  filterCall(rest) {
    console.log(rest)
    this.setState({
          resultFromFilter: rest,
      })
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return(
      <React.Fragment> 
        <NavBar />
        <div className="clearbox"></div>
        <main className = "Union" >
          <Switch>
            <Route exact path="/">
              <Filter filterCallProp={this.filterCall} />
              <VideoApi />
            </Route>
            <Route exact path="/filters">
              <Filter filterCallProp={this.filterCall} />
              <VideoCards resultFromFilter = {this.state.resultFromFilter} />
            </Route>
            <Route path="/video/player/:idyou" component={VideoPlayer} />
            <Route path="/login" >
              <Login getUser={this.getUser} />
            </Route>
            <Route path="/sign">
              <Signup getUser={this.getUser} />
            </Route>
            <Route path="/logout">
              <Logout getUser={this.getUser} />
            </Route>
            <ProtectedRoute
                user={this.state.user}
                exact
                path="/user"
                component={UserInfo}
              />
            {/* <Route path="/user" >
              <UserInfo user={this.state.user}/>
            </Route> */}
          </Switch>
          <div className="clearbox"></div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
