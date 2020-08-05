import React from "react";
import Ranking from './Ranking';
import Categoria from "./Categoria";


function BoxRanking (){
    const propiedades = [
        {
            titulo: 'Mayor Stock',
            endpoint: 'mas-stock',
            detalle: 'Stock:'
            
        },
        {
            titulo: 'Menor Stock',
            endpoint: 'menos-stock',
            detalle: 'Stock:'
            
        },
        {
            titulo: 'Mas Ventas',
            endpoint: 'mas-stock',
            detalle: 'Unidades vendidas:'
            
        }
    ];


    return(
        <div className="container complementos">
             <div className="row ">
                {propiedades.map((propiedad, i) =>
                <Ranking className="data-ranking"
                    key={i}
                    titulo={propiedad.titulo}
                    endpoint={propiedad.endpoint}
                    detalle={propiedad.detalle}
                />)
                }
                <Categoria className="data-ranking" /> 
            </div>
            
        </div>
        );
    
}
export default BoxRanking;