import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"

export default class FilterComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titulo: "",
      comedian: "",
      location: "",
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
          <img src="/images/filter-icon.png" id="filter" alt="filter-icon" />
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
    console.log(this.state)
    const firstCall = await axios.post(
      "http://localhost:3010/api/videos/filter",
      this.state,
      {withCredentials: true}
    )
    console.log(firstCall)
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
          <button className="btn btn-secondary" type="submit" onClick={this.handlerSubmit}>Search</button>
        </Link>
        <button className="btn btn-secondary" onClick={this.eraseForm}>Limpar campos </button>
      </div>
    )
  }

  render() {
    return (
      <aside className="formAside">
        {this.topFilter()}
        <form className="formFilter" >
          <label htmlFor="exampleFormControlInput1">Tags</label>
          <textarea onChange={this.handlerChange} type="tag" className="form-control" id="exampleFormControlInput1" placeholder="Titulo" name="titulo" value={this.state.titulo}/>
          <label htmlFor="exampleFormControlInput1">Comediante</label>
          <textarea onChange={this.handlerChange} type="Comediante" className="form-control" id="exampleFormControlInput1" placeholder="Afonso Padilha" name="comedian" value={this.state.comedian}/>
          <label htmlFor="exampleFormControlInput1">Região</label>
          <textarea onChange={this.handlerChange} type="regiao" className="form-control" id="exampleFormControlInput1" placeholder="Bahia" name="location" value={this.state.location}/>
          <label htmlFor="exampleFormControlInput1">Gênero</label>
          <textarea onChange={this.handlerChange} type="gênero" cols={20} row={100} className="form-control" id="exampleFormControlInput1" placeholder="Humor Negro" name="genre" value={this.state.genre}/>
        </form>
        {this.buttonForm()}
      </aside>
    )
  }
}