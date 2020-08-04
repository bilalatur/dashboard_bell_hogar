import React, { Component } from "react";

class Total extends Component{
    constructor(props){
        super(props);
        this.state={
            total:null,
            error:null,
            isLoaded: false,
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(informacion => consecuencia(informacion))
        .catch(error => this.setState({error:error}))
    }

    componentDidMount(){
        console.log("montaje ok");
        this.apiCall('http://localhost:3001/api/'+ this.props.endpoint, this.listarTotal)
    }

    listarTotal = (informacion)=>{
        console.log("respuesta de la api " + informacion.data)
        this.setState({
            total:informacion.meta.total,
            isLoaded: true,
        })
    }

    render(){
        if(this.state.error){
            return <div>Error: {this.state.error.message}</div>;
        }else if(!this.state.isLoaded){
            return <div>Cargando...</div>;
        }else{
            return(
                <div className="col-4">
                    <div className="row ">
                        <div className="total ">
                            <h5 className="font-weight-bold "> Total de {this.props.titulo}</h5>
                            <h6 className="font-weight-bold ">{this.state.total}</h6>
                            <i className={this.props.icono}> </i>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Total;