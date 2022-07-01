import React,{Component} from "react"
import CarList from "./CarList";



class Nav extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">CarList</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
             <CarList title="BMW" model1="X5" model2="X7" />
             <CarList title="Mercedes"  model1="S500" model2="S600" model3="S700"/>
             <CarList title="Audi"  model1="A4" model2="A5"/>

        
              </ul>
            
            </div>
          </div>
        </nav>
      )
    }
  }

  export default Nav;