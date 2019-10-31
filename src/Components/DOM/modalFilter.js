export default function modalFilter() {
  const searchDomMobile = document.getElementById("searchDom")
  const sectionDom = document.getElementsByClassName("section-form-dom-mobile")[0]

  //Create Inputs
  if(!(document.getElementsByClassName("input-dom").length)) {
    let elemento = document.createElement("input")  
    elemento.setAttribute("class","input-dom")
    elemento.setAttribute("name","nameVideo")
    elemento.setAttribute("placeholder","Título")
    sectionDom.append(elemento)
  
    elemento = document.createElement("input")
    elemento.setAttribute("class","input-dom")
    elemento.setAttribute("name","nameChannel")
    elemento.setAttribute("placeholder","Comediante")
    sectionDom.append(elemento)
  
    elemento = document.createElement("input")
    elemento.setAttribute("class","input-dom")
    elemento.setAttribute("name","tags")
    elemento.setAttribute("placeholder","velho,governo,moda,brasil...")
    sectionDom.append(elemento)
  
    elemento = document.createElement("input")
    elemento.setAttribute("class","input-dom")
    elemento.setAttribute("name","genre")
    elemento.setAttribute("placeholder","Genêro")
    sectionDom.append(elemento)

    //Create div to button
    let elementoDiv = document.createElement("div")
    elementoDiv.setAttribute("class", "div-button-dom")
    sectionDom.append(elementoDiv)
  
    //Create Button
    elemento = document.createElement("button")  
    elemento.setAttribute("class","btn btn-secondary button-dom-submit btn-search")
    elemento.innerHTML = "Pesquisar"
    elementoDiv.append(elemento)
  
    elemento = document.createElement("button")
    elemento.setAttribute("class","btn btn-secondary button-dom-exit btn-erase")
    elemento.innerHTML = "Sair"
    elementoDiv.append(elemento)
  }

  searchDomMobile.style.display = "block"

  const exit = document.getElementsByClassName("button-dom-exit")[0]
    exit.onclick = () => {
    searchDomMobile.style.display = "none"
  }
  console.log(searchDomMobile)
}