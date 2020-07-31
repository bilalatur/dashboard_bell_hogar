import React, {Component} from "react";

class VentasMes extends Component{
    render(){
        return(
            <div className="card-body border-left-primary h-100">
                <div className="row align-items-center">
                    <div className="col mr-2">
                        <div className="font-weight-bold text-uppercase title-p"> Total de Ventas por mes </div>
                        <div className="font-weight-bold text-gray-800">$83.800</div>
                    </div>
                </div>
            </div>
        
        );
    }
}
    export default VentasMes;