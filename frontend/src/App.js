import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion';



import ListarPaises from './Componentes/ListarPais'
import InsertarPais from './Componentes/Pais'
import EditarPais from './Componentes/Pais'
import EditarDepartamento from './Componentes/Departamento'
import InsertarDepartamento from './Componentes/Departamento'
import ListarDepartamentos from './Componentes/ListarDepartamento'
import InsertarMunicipio from './Componentes/Municipio'
import EditarMunicipio from './Componentes/Municipio'
import ListarMunicipios from './Componentes/ListarMunicipio';
import ListarDepartamentosp from './Componentes/ListarDepartamento2'
import ListarMunicipiosp from './Componentes/ListarMunicipio2'
import Nohaypais from './Componentes/Nohaypais'
import Nohaydepartamento from './Componentes/Nohaydepto'

function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">
       
       
        <Route path="/ListarPaises" exact component={ListarPaises} />
        <Route path="/InsertarPais" exact component={InsertarPais} />
        <Route path="/EditarPais/:id" component={EditarPais} />
        <Route path="/InsertarDepartamento" exact component={InsertarDepartamento} />
        <Route path="/EditarDepartamento/:id" component={EditarDepartamento} />
        <Route path="/ListarDepartamentos" exact component={ListarDepartamentos} />
        <Route path="/InsertarMunicipio" exact component={InsertarMunicipio} />
        <Route path="/EditarMunicipio/:id" exact component={EditarMunicipio} />
        <Route path="/ListarMunicipios" exact component={ListarMunicipios} />
        <Route path="/ListarDepartamentosp/:Pais_Nombre" component={ListarDepartamentosp} />
        <Route path="/ListarMunicipiosp/:Dep_Nombre" component={ListarMunicipiosp} />
        <Route path="/Nohaypais" exact component={Nohaypais} />
        <Route path="/Nohaydepartamento" exact component={Nohaydepartamento} />
      </div>
      
    </Router>
  );
}

export default App;
