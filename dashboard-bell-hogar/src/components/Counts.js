import React from "react";
import Total from "./Total";

function Counts(){
    const totales = [
        {
            titulo: 'Productos',
            endpoint: 'products/count',
            icono: 'fas fa-clipboard-list fa-2x text-gray-200'
        },
        {
            titulo: 'Usuarios',
            endpoint: 'users/count',
            icono: 'fas fa-dollar-sign fa-2x text-gray-200'
        },
        {
            titulo: 'Categorias',
            endpoint: 'products/category',
            icono: 'fas fa-user-check fa-2x text-gray-200'
        }
    ];
    return(
        <div className="complementos">
             {totales.map((total, i) =>
                <Total
                    key={i}
                    titulo={total.titulo}
                    endpoint={total.endpoint}
                    icono={total.icono}
                />)
            }
        </div>
    );
}

export default Counts;