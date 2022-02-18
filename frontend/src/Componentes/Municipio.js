

import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Municipio extends Component {
    state = {

        Municipio: [], 
        depvec: [], 

        Mu_Nombre:"",
        Mu_Departamento:"",
       
        editing: false

    }
    
    async componentDidMount(){
      this.getmunicipio();
      this.getdepartamento();
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:9000/api/municipios/' + this.props.match.params.id);
        
        this.setState({

            
            Mu_Nombre:res.data.Mu_Nombre,
            Mu_Departamento:res.data.Mu_Departamento,
            

            editing: true,
            _id: this.props.match.params.id 
        })
        
    }
  }

  
  getmunicipio = async () =>{
        const per = await axios.get('http://localhost:9000/api/municipios/');
        this.setState({Municipio: per.data});    
        
   }

   getdepartamento = async () =>{
   
    const per = await axios.get('http://localhost:9000/api/departamentos/');

    if(per.data.length===0){
    window.location.href = '/Nohaydepartamento'; 
    }

    this.setState({depvec: per.data,
        Mu_Departamento :per.data[0].Dep_Nombre}); 
  
    }

    

    createmunicipio = async a =>{

        a.preventDefault();

        const newDir = {

            Mu_Nombre:this.state.Mu_Nombre,
            Mu_Departamento:this.state.Mu_Departamento,

            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

         
          await axios.put('http://localhost:9000/api/municipios/' + this.state._id, newDir);

          window.location.href = '/ListarPaises';  
          
          }

       
          else{
            await axios.post('http://localhost:9000/api/municipios/', newDir);

          
        window.location.href = '/ListarPaises';  
          
      }
      
        
    }

    

    onInputChange = e =>{
        
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    onInputChange2 = e =>{
        
      this.setState({
        [e.target.name]: e.target.value  
      })
  }


    onChangeFechanac = e => {
      this.setState({e})
    }

    

    render() {

        return (
            

          <div className="col-md-25 offset-md-1">
          <div className="card card-body">
              <h4 align="center">REGISTRO DE MUNICIPIOS</h4>
              <h4 bgcolor="black">REGISTRAR MUNICIPIO</h4>


              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="MUNICIPIO O PROVINCIA" 
                      name="Mu_Nombre"
                      onChange= {this.onInputChange}
                      value={this.state.Mu_Nombre}
                      />  
                    </div>
                             
                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">DEPARTAMENTO O ESTADO QUE PERTENECE</h5> 
                                
                 <select value={this.state.value} onChange={this.onInputChange} name="Mu_Departamento" >
                 
                                     {
                                
                              this.state.depvec.map(a =>
                                
                               <option key={a._id} value={a.Dep_Nombre}>
                                 
                                 {a.Dep_Nombre}
                                   
                                 </option>
                                 
                                 )
                                 
                                                                   
                             }
                                           
                 </select>
                  
                              
                                
                  </label>
                  </form>
                  </div>
              
              
             
              
              <form onSubmit={this.createmunicipio}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR MUNICIPIO
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


