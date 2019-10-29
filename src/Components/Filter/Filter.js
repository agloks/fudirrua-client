import React from "react"
import {Link} from "react-router-dom"

export default class FilterComp extends React.Component {
  constructor(props) {
    super(props)
  }

  topFilter() {
    return ( 
      <div className="top-filter">
          <img src="/images/filter-icon.png" id="filter" alt="filter-icon" />
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Mais novos primeiro</option>
            <option>Mais antigos primeiro</option>
            <option>Quantidades de Views</option>
            <option>Mais curtidos primeiro</option>
            <option>Menos curtidos primeiro</option>
          </select>
        </div>
    )
  }

  buttonForm() {
    return (
      <div class="buttonForm">
        <Link to="/filter">
          <button className="btn btn-secondary">Search</button>
        </Link>
        <button className="btn btn-secondary">Limpar campos</button>
      </div>
    )
  }

  render() {
    return (
      <aside className="formAside">
        {this.topFilter()}
        <form className="formFilter">
          <label htmlFor="exampleFormControlInput1">Tags</label>
          <textarea type="tag" className="form-control" id="exampleFormControlInput1" placeholder="Anitta"/>
          <label htmlFor="exampleFormControlInput1">Comediante</label>
          <textarea type="Comediante" className="form-control" id="exampleFormControlInput1" placeholder="Afonso Padilha"/>
          <label htmlFor="exampleFormControlInput1">Região</label>
          <textarea type="regiao" className="form-control" id="exampleFormControlInput1" placeholder="Bahia"/>
          <label htmlFor="exampleFormControlInput1">Gênero</label>
          <textarea type="gênero" cols={20} row={100} className="form-control" id="exampleFormControlInput1" placeholder="Humor Negro"/>
        </form>
        {this.buttonForm()}
      </aside>
    )
  }
}