

import React, { Component } from 'react';
import axios from 'axios';
//import {format} from 'timeago.js'
import {Link} from "react-router-dom";

export default class ListarPersonas extends Component {

    state= {
        Cis: [],
    }

    componentDidMount() {
        this.getPersonas();   
    }

    getPersonas = async () =>{
        const persons = await axios.get('http://localhost:9000/api/Cis/');
        this.setState({Cis: persons.data});        
    }
        
    deletepersona = async (id) => {
        await axios.delete('http://localhost:9000/api/Cis/' + id);
        this.getPersonas(); 
    }
        
    render() {
        return (
            <div className="row">
                {
                    this.state.Cis.map(cor => (
                        <div className="col-md-4 p-2" key={cor.IdPersona}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5><b>Modificar Persona Cis</b>:{cor.NombrePersona}</h5>
                                    <Link className="btn btn-secondary" to={"/EditarPersonaCis/" + cor.IdPersona}>
                                        Editar 
                                    </Link>
                                </div>
                                <div className="card-header d-flex justify-content-between">
                                    <h5><b>Departamento Nombre </b>: {cor.NombrePersona}</h5>  
                                </div>
                                <div className="card-header d-flex justify-content-between">
                                    <h5><b>G&eacute;nero</b>: {cor.GeneroPersona}</h5>  
                                </div>
                                <div className="card-header d-flex justify-content-between">
                                    <h5><b>Etnia</b>: {cor.EtniaPersona}</h5>  
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deletepersona(cor._id)}>
                                        Eliminar Persona Cis
                                    </button>
                                </div> 
                            </div>
                        </div>
                    ))
                }

                            
               
            </div>


        )
    }
}
