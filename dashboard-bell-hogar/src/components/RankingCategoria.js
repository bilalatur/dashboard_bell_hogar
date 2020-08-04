import React, {Component} from "react";

class RankingCategoria extends Component{
    constructor(props){
        super(props);
        this.state={
            ranking:[],
            error:null,
            isLoaded: false
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(informacion => consecuencia(informacion))
        .catch(error => this.setState({error:error}))
    }

    componentDidMount(){
        this.apiCall('http://localhost:3001/api/products/category-products', this.listarranking);
    }

    listarranking = (informacion)=>{
        this.setState({
            ranking:informacion.data,
            isLoaded: true,
        })
    }

    productosPorCategoria(){
        let stateCategory = this.props.category;

        let productFiltered = this.state.ranking.filter(function(item){
            return item.category === stateCategory;
        })

        return productFiltered;
    }

    render(){
        if(this.state.error){
            return <div>Error: {this.state.error.message} </div>;
        }else if(!this.state.isLoaded){
            return <div>Cargando...</div>;
        }else{
            return(
                <div className="">
                        <div className="col-8">
                            <ul>
                                { this.productosPorCategoria().slice(0,5).map((item , i) => <li key = {i}> {item.name}</li>) }
                            </ul>
                        </div>
                        <div className="col-8">
                            <h4 className="categoria-title col-12"> Total productos: </h4>
                            <p>
                                { this.productosPorCategoria().length }
                            </p>
                        </div>
                </div>
                );
            }
        }
    }
export default RankingCategoria;