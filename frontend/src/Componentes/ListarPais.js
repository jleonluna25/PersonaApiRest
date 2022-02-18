
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarPais extends Component {

    state= {
        paises: [], 
    
        
    }

    componentDidMount() {
     
        this.getpaises();   
    
       }


       getpaises = async () =>{
        const per = await axios.get('http://localhost:9000/api/paises/');
        this.setState({paises: per.data});    
        
        }
        
        deletepais = async (id) => {

            const res4= await axios.get('http://localhost:9000/api/paises/');
            var rr="";
            const x=[];  
            const x1=[];

            const xx=[];  
            const xx1=[];

            for (var i=0; i<res4.data.length; i++){
            if(res4.data[i]._id === id ){rr=res4.data[i].Pais_Nombre}  
            }
            //await axios.delete('http://localhost:9000/api/paises/' + id);
           // console.log("paiaelib"+rr);
           //Dep_Pais
           const dep = await axios.get('http://localhost:9000/api/departamentos/');
           for (var j2=0; j2<dep.data.length; j2++){
            if(dep.data[j2].Dep_Pais === rr ){
                x1.push(dep.data[j2]._id);
                x.push(dep.data[j2].Dep_Nombre);
            }      
           }

           const mun = await axios.get('http://localhost:9000/api/municipios/');

           for(var g=0; g<x.length; g++){
           for (var j=0; j<mun.data.length; j++){
           if(x[g]===mun.data[j].Mu_Departamento){
           xx1.push(mun.data[j]._id);
           xx.push(mun.data[j].Mu_Nombre)} 

           }
           }

           /*
           
           for (var k=0; k<x.length; k++){
            console.log("----depid:"+x1[k]);       
           console.log("----dep:"+x[k]);    
           }
           
           for(var kk=0; kk<xx.length; kk++){
            console.log("----munid:"+xx1[kk]);       
            console.log("----mun:"+xx[kk]);     
           }*/

            
           await axios.delete('http://localhost:9000/api/paises/' + id);

           
           for (var k1=0; k1<x1.length; k1++){
            await axios.delete('http://localhost:9000/api/departamentos/' + x1[k1]);    
           }
            
           
           for (var k2=0; k2<xx1.length; k2++){
            await axios.delete('http://localhost:9000/api/municipios/' + xx1[k2]);    
           }
            
            this.getpaises();     
            
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
                    this.state.paises.map(cor => (

                       
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Pais</b>:{cor.Pais_Nombre}</h5>
                            
                             <Link className="btn btn-secondary" to={"/EditarPais/" + cor._id}>
                                Editar Pais
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Pais Nombre </b>: {cor.Pais_Nombre}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Pais Poblacion</b>: {cor.Pais_Poblacion}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Clima Pais</b>: {cor.clima_pais}</h5>  
                            </div>
                            

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletepais(cor._id)}>
                                    Eliminar Pais
                                </button>
                            </div> 


                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/ListarDepartamentosp/" + cor.Pais_Nombre}>
                              Departamentos o Estados
                             </Link>
                             
                            </div>

                            
                        </div>
                        </div>

                    ))

                }
                
                            <div className="card-footer">
                             
                             <Link className="btn btn-secondary" to={"/ListarDepartamentos"}>
                              Listar Todos Los Departamentos o Estados
                             </Link>
                             
                             </div>
                             
                             <div className="card-footer">
                             
                             <Link className="btn btn-secondary" to={"/ListarMunicipios"}>
                              Listar Todos Los Municipios O Provincia
                             </Link>
                             
                             </div>
                            
               
            </div>

        )
    }
}
