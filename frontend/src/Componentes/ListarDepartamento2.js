


import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarDepartamento2 extends Component {

    state= {
        departamentos: [], 
        obtenerpais:"",
    
        
    }

    componentDidMount() {
     
        this.getdepartamentos();   
       
    
       }


       getdepartamentos = async () =>{
        const per = await axios.get('http://localhost:9000/api/departamentos/');
        this.setState({departamentos: per.data});    
        
        }

        deletedepartamento = async (id) => {

            const res4= await axios.get('http://localhost:9000/api/departamentos/');
            
            const x=[];  
            const xx1=[];    

            for (var i=0; i<res4.data.length; i++){
                if(res4.data[i]._id === id ){x.push(res4.data[i].Dep_Nombre)}  
                }

            const mun = await axios.get('http://localhost:9000/api/municipios/');

           
           for (var j=0; j<mun.data.length; j++){
           if(x[0]===mun.data[j].Mu_Departamento){
           xx1.push(mun.data[j]._id);
           
           }     
            
        }

        await axios.delete('http://localhost:9000/api/departamentos/' + id);

        for (var k2=0; k2<xx1.length; k2++){
            await axios.delete('http://localhost:9000/api/municipios/' + xx1[k2]);    
           }
        this.getdepartamentos(); 
    }

    render() {
        
        return (
            <div className="row">
                {
                    this.state.departamentos.filter(C88 => C88.Dep_Pais===this.props.match.params.Pais_Nombre).map(cor => (

                        
                       
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Departamento</b>:{cor.Dep_Nombre}</h5>
                            
                             <Link className="btn btn-secondary" to={"/EditarDepartamento/" + cor._id}>
                                Editar 
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Departamento Nombre </b>: {cor.Dep_Nombre}</h5>  
                            </div>


                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletedepartamento(cor._id)}>
                                    Eliminar Departamento
                                </button>
                            </div> 


                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/ListarPaises"}>
                              Ir a Inicio
                             </Link>
                             
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/ListarMunicipiosp/" + cor.Dep_Nombre}>
                              Municipios o Provincias
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
