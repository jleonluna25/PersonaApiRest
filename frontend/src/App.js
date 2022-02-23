import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion';



import ListarPaises from './Componentes/ListarPais'
import InsertarPais from './Componentes/Pais'
import EditarPais from './Componentes/Pais'

import ListarPersonasCis from './Componentes/ListarPersonasCis';
import InsertarMunicipio from './Componentes/Municipio'
import EditarMunicipio from './Componentes/Municipio'
import ListarMunicipios from './Componentes/ListarMunicipio';

import ListarMunicipiosp from './Componentes/ListarMunicipio2'
import Nohaypais from './Componentes/Nohaypais'
import NoCisPersons from './Componentes/Nohaydepto';
import Cis from './Componentes/Cis';


function App() {
  return (
    <Router>
      <Navegacion />
      <div className="container p-4">
        <Route path="/ListarPaises" exact component={ListarPaises} />
        <Route path="/InsertarPais" exact component={InsertarPais} />
        <Route path="/EditarPais/:id" component={EditarPais} />
        <Route path="/Cis" exact component={Cis} />
        <Route path="/Cis/:id" component={Cis} />
        <Route path="/ListarPersonasCis" exact component={ListarPersonasCis} />
        <Route path="/InsertarMunicipio" exact component={InsertarMunicipio} />
        <Route path="/EditarMunicipio/:id" exact component={EditarMunicipio} />
        <Route path="/ListarMunicipios" exact component={ListarMunicipios} />
        <Route path="/ListarPersonasCis/:NombrePersona" component={ListarPersonasCis} />
        <Route path="/ListarMunicipiosp/:Dep_Nombre" component={ListarMunicipiosp} />
        <Route path="/Nohaypais" exact component={Nohaypais} />
        <Route path="/Nohaydepto" exact component={NoCisPersons} />
      </div>
    </Router>
  );
}

export default App;
