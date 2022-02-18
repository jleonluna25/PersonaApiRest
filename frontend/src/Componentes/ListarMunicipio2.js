



import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarMunicipio2 extends Component {

    state= {
        municipios: [], 
        
    }

    componentDidMount() {
     
        this.getmunicipios();   
       
    
       }


       getmunicipios = async () =>{
        const per = await axios.get('http://localhost:9000/api/municipios/');
        this.setState({municipios: per.data});    
        
        }
        
        deletemunicipio = async (id) => {
              
            await axios.delete('http://localhost:9000/api/municipios/' + id);
            
            this.getmunicipios();     
            
        }


       
        

        
/*
<div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteobservacion(cor._id)}>
                                    Eliminar Observacion
                                </button>
                            </div> 
*/
      

    render() {
        
        return (
            <div className="row">
                {
                    this.state.municipios.filter(C88 => C88.Mu_Departamento===this.props.match.params.Dep_Nombre).map(cor => (

                        
                       
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Municipio</b>:{cor.Mu_Nombre}</h5>
                            
                             <Link className="btn btn-secondary" to={"/EditarDepartamento/" + cor._id}>
                                Editar 
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Municipio o Provincia Nombre </b>: {cor.Mu_Nombre}</h5>  
                            </div>


                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletemunicipio(cor._id)}>
                                    Eliminar Municipio
                                </button>
                            </div> 


                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/ListarPaises"}>
                              Ir a Inicio
                             </Link>
                             
                            </div>

                            
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}
