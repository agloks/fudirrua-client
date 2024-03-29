import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"

export default class FilterComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameVideo: "",
      nameChannel: "",
      // location: "",
      tags: "",
      genre: "",
      datePublication: "Mais novos primeiro"
    }
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
    this.eraseForm = this.eraseForm.bind(this)
  }

  topFilter() {
    return ( 
      <div className="top-filter">
          {/* <img src="/images/filter-icon.png" id="filter" alt="filter-icon" /> */}
          <select onChange={this.handlerChange} className="form-control" id="exampleFormControlSelect1" name="datePublication">
            <option>Mais novos primeiro</option>
            <option>Mais antigos primeiro</option>
            <option>Quantidades de Views</option>
            <option>Mais curtidos primeiro</option>
            <option>Menos curtidos primeiro</option>
          </select>
        </div>
    )
  }

  async callFilter() {
    const firstCall = await axios.post(
      `${process.env.REACT_APP_URL}/api/videos/filter`,
      this.state,
      {withCredentials: true}
    )
    return firstCall.data
 }

  async handlerSubmit(e) {
    // e.preventDefault()
    const {filterCallProp} = this.props
    const firstCall = await this.callFilter()
    filterCallProp(firstCall)
  }

  handlerChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  eraseForm(e) {
    e.preventDefault()
    for(let k in this.state) {
      if(k !== "datePublication")
      this.setState({
        [k]: ""
      })
    }
  }

  buttonForm() {
    return (
      <div className="buttonForm">
        <Link to="/filters">
          <button className="btn btn-secondary btn-search" type="submit" onClick={this.handlerSubmit}>Search</button>
        </Link>
        <button className="btn btn-secondary btn-erase" onClick={this.eraseForm}>Limpar campos </button>
      </div>
    )
  }

  componentWillUnmount() {
    const searchDomMobile = document.getElementById("searchDom")
    searchDomMobile.style.display = "none"
  }

  render() {
    return (
      <aside className="formAside">
        {this.topFilter()}
        <form className="formFilter" >
          <label htmlFor="exampleFormControlInput1">Título</label>
          <textarea onChange={this.handlerChange} type="text" className="form-control"  placeholder="O dia que..." name="nameVideo" value={this.state.nameVideo}/>
          <label htmlFor="exampleFormControlInput1">Comediante</label>
          <textarea onChange={this.handlerChange} type="text" className="form-control"  placeholder="Afonso Padilha" name="nameChannel" value={this.state.nameChannel}/>
          {/* <label htmlFor="exampleFormControlInput1">Região</label>
          <textarea onChange={this.handlerChange} type="regiao" className="form-control" id="exampleFormControlInput1" placeholder="Bahia" name="location" value={this.state.location}/> */}
          <label htmlFor="exampleFormControlInput1">Tags</label>
          <textarea onChange={this.handlerChange} type="text" className="form-control"  placeholder="velho, novo, bonito, governo..." name="tags" value={this.state.tags}/>
          <label htmlFor="exampleFormControlInput1">Gênero</label>
          <textarea onChange={this.handlerChange} type="text" cols={20} row={100} className="form-control"  placeholder="Humor Negro" name="genre" value={this.state.genre}/>
        </form>
        {this.buttonForm()}
      </aside>
    )
  }
}