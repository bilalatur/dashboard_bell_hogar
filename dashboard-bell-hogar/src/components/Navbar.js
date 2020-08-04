import React from "react";

function Navbar(){
    return(
        <nav>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="totals-tab" data-toggle="tab" href="#totals" role="tab" aria-controls="totals" aria-selected="true">Totales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="products-tab" data-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="false">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="users-tab" data-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Usuarios</a>
                </li>
            </ul>
      </nav>
    )
}
export default Navbar;