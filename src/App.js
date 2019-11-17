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
import {SphereSpinner} from "react-spinners-kit"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultFromFilter: [],
      user: null,
      prevUpdateFilter: 0,
      updateFilter: 0,
      signUpdate: 0,
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
  }

  filterCall(rest) {
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
          await this.callFilter(objSend).then((s) => {
            this.setState({
              resultFromFilter: s,
              updateFilter: this.state.updateFilter + 1
            })
          })
        }
      }
    } 
  }

  componentDidUpdate(prevProps, nextProps) {

      if(this.state.prevUpdateFilter !== this.state.updateFilter) {
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
              {
                this.state.updateFilter === this.state.prevUpdateFilter ? <VideoCards key={this.state.updateFilter} resultFromFilter = {this.state.resultFromFilter} /> : null
              }
            </Route>
            <Route path="/video/player/:idyou" component={VideoPlayer} />
            <Route path="/login"  children={ (props) => <Login {...props} getUser={this.getUser}/>} />
            <Route path="/sign" children={ (props) => <Signup {...props} getUser={this.getUser} />} />
            <Route path="/logout">
              <Logout getUser={this.getUser} />
            </Route>
              {this.state.user ? 
              this.state.user && <Route path="/history" children={(props) =><VideoHistory {...props} component={Filter} filterCallProp={this.filterCall} user={this.state.user} />} /> :
              <Route path="/history">
                <div className="mid">
                  <h1>Logue para ver registar/ver seus históricos</h1>
                </div>
              </Route>}
            <ProtectedRoute
                key = {this.state.signUpdate}
                user={this.state.user}
                getUser={this.getUser}
                exact
                path="/user"
                component={UserInfo}
                componentTwo={Filter}
                // componentThree={window.innerWidth > 768 ? VideoHistory : Filter}
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