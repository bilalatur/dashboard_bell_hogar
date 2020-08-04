import React from 'react';
import './App.css';

import Header from './components/Header';
import Volver from './components/Volver';
import Counts from './components/Counts';
import BoxRanking from './components/BoxRanking';
import Navbar from './components/Navbar';
import ListaUsuarios from './components/ListaUsuarios';
import ListaProductos from './components/ListaProductos';

function App() {
  return (
    <div className="body">
      <div className="container-head col-12">
        <Header className="col-12"/>
      </div>
      <div className="col-12">
        <Volver className="col-12"/>
        <Navbar/>
      </div>
      <div className="tab-content" id="myTabContent">
          {/* totales */}
          <div className="tab-pane fade  show active" id="totals" role="tabpanel" aria-labelledby="totals-tab">
            <div className="container col-12">
              <div className="row col-12">
                <div className="container col-12">
                    <Counts className="row col-12 counts" />
                </div>
                <div className="container col-md-12">
                  <div className="row col-md-12">
                    < BoxRanking />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* productos*/}
          <div className="tab-pane fade" id="products" role="tabpanel" aria-labelledby="products-tab">
                <div className="container col-12">
                  <div className="row col-12">
                        <ListaProductos />
                  </div>
                </div>
          </div>
          {/* usuarios*/}
          <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                <div className="container col-12">
                  <div className="row col-12">
                        <ListaUsuarios />
                  </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default App;

