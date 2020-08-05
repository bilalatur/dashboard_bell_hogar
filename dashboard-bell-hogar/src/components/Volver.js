import React, {Component} from "react";

class Volver extends Component{
    render (){
        return(
            <div className="container row volver col-12">
                <button className="volver-btn"><a href="http://localhost:3000/users/profile" >Perfil de Administrador </a> </button>
            </div>
        );
    }
}
export default Volver;