import React from "react"

// <div className="container">
// <div className="row">
//   <div className="col-2">
//   <div>
//     <img src="/images/lupa-icon.png" />
//   <div className="form-group">
//   <label htmlFor="exampleFormControlSelect1">Example select</label>
//   <select className="form-control" id="exampleFormControlSelect1">
//     <option>Mais novos primeiro</option>
//     <option>Mais antigos primeiro</option>
//     <option>Quantidades de Views</option>
//     <option>Mais curtidos primeiro</option>
//     <option>Menos curtidos primeiro</option>
//   </select>
//   </div>
//   </div>
//   </div>
//   <form>
//     <h2>Filtros</h2>
//       <div className="form-group">
//       <label htmlFor="exampleFormControlInput1">Tags</label>
//       <input type="tag" className="form-control" id="exampleFormControlInput1" placeholder="Anitta"/>
//       <label htmlFor="exampleFormControlInput1">Comediante</label>
//       <input type="Comediante" className="form-control" id="exampleFormControlInput1" placeholder="Afonso Padilha"/>
//       <label htmlFor="exampleFormControlInput1">Região</label>
//       <input type="regiao" className="form-control" id="exampleFormControlInput1" placeholder="Bahia"/>
//       <label htmlFor="exampleFormControlInput1">Gênero</label>
//       <input type="gênero" className="form-control" id="exampleFormControlInput1" placeholder="Humor Negro"/>
//       <button className="btn btn-secondary">Search</button>
//       <button className="btn btn-secondary">Limpar campos</button>
//     </div>
//   </form>
// </div>
//   <div className="col-10">Container</div>
// </div>

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
        <button className="btn btn-secondary">Search</button>
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