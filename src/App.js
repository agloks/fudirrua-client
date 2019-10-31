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
import VideoHistory from "./Components/API/VideoHistory"
import Login from "./Components/Auth/Login"
import Logout from "./Components/User/UserLogout"
import Signup from "./Components/Auth/Signup"
import UserInfo from "./Components/User/UserInfo"
import AuthService from "./Components/Auth/AuthUser"
import ProtectedRoute from "./Components/Auth/ProtectAuth"
import modalFilter from "./Components/DOM/modalFilter"
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultFromFilter: [],
      user: null,
      prevUpdateFilter: 0,
      updateFilter: 0,
      signUpdate: 0
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
    this.setState({
      user: rest,
      signUpdate: this.state.signUpdate + 1
    })
    console.log(this.state.user)
  }

  filterCall(rest) {
    console.log(rest)
    this.setState({
          resultFromFilter: rest,
          updateFilter: this.state.updateFilter + 1
      })
  }

  async callFilter(objS) {
    const firstCall = await Axios.post(
      `${process.env.REACT_APP_URL}/api/videos/filter`,
      objS,
      {withCredentials: true}
    )
    return firstCall.data
 }

  componentDidMount() {
    this.fetchUser();
    
    //DOM
    if(document.getElementsByClassName("inputSearch")[0] !== undefined) {
      const searchMobileInput = document.getElementsByClassName("inputSearch")[0]
      searchMobileInput.onclick = () => {
        modalFilter()
        const submit = document.getElementsByClassName("button-dom-submit")[0]
        submit.onclick = async () => {
          const allInput = document.getElementsByClassName("input-dom")
          let objSend = {}
          for(let x of allInput) {
            objSend[x.name] = x.value
          }
          console.log(objSend)
          await this.callFilter(objSend).then((s) => {
            this.setState({
              resultFromFilter: s,
              updateFilter: this.state.updateFilter + 1
            })
          })
          // console.log(resultApiFilter)
        }
      }
    } 
  }

  componentDidUpdate(prevProps, nextProps) {
      if(this.state.prevUpdateFilter !== this.state.updateFilter) {
        console.log(this.state.prevUpdateFilter, this.state.updateFilter)
        this.setState({prevUpdateFilter: this.state.prevUpdateFilter+1}) //static, not is necessary use of this and setState
      }
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
              {this.state.updateFilter === this.state.prevUpdateFilter ? <VideoCards key={this.state.updateFilter} resultFromFilter = {this.state.resultFromFilter} /> : null}
            </Route>
            <Route path="/video/player/:idyou" component={VideoPlayer} />
            <Route path="/login"  children={ (props) => <Login {...props} getUser={this.getUser}/>} />
            <Route path="/sign" children={ (props) => <Signup {...props} getUser={this.getUser} />} />
            <Route path="/logout">
              <Logout getUser={this.getUser} />
            </Route>
              {this.state.user && <Route path="/history" children={(props) =><VideoHistory {...props} user={this.state.user} />} />}
            <ProtectedRoute
                key = {this.state.signUpdate}
                user={this.state.user}
                getUser={this.getUser}
                exact
                path="/user"
                component={UserInfo}
                componentTwo={Filter}
                componentThree={VideoHistory}
                filterCallProp ={this.filterCall}
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