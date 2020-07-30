import React from 'react';
import './App.css';
import VentasAnuales from "./components/VentasAnuales"; 
import VentasMes from './components/VentasMes';
import TotalProductos from './components/TotalProductos';
import Header from './components/Header';
import Ranking from './components/Ranking';
import Volver from './components/Volver';

function App() {
  return (
    <body className="body">
      <head> 
          <link rel="shortcut icon" href="/images/Logo2.png"img />
          <script src="https://kit.fontawesome.com/f29a46c1ae.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </head> 
      <div className="container-head col-12">
        <Header className="col-12"/> 
      </div>
      <div className="container-volver col-12">  
        <Volver className="col-12"/> 
      </div>
      <div className="container col-12"> 
        <div className="row col-12">
          <div className="container col-12">
            <div className="row col-12">
              <div className="complementos col-12">
                <VentasAnuales className="col-4"/> 
                <TotalProductos className="col-4"/>
                <VentasMes className="col-4"/>
              </div>
            </div>
          </div>
        <div className="container col-md-12">
          <div className="row col-md-12">
            <div className="ranking">
              <Ranking className="data-ranking-app col-6"/>
              <Ranking className="data-ranking-app col-6"/>
              <Ranking className="data-ranking-app col-6"/>
              <Ranking className="data-ranking-app col-6"/> 
            </div>
          </div>
        </div>
        </div>
      </div> 
    </body>
  )
}

export default App;

