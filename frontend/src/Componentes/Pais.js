


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Pais extends Component {
    state = {

        pais: [], 

        Pais_Nombre:"",                 
        Pais_Poblacion:"",
        clima_pais:"",
       
        editing: false

    }
    
    async componentDidMount(){
      this.getpais();
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:9000/api/paises/' + this.props.match.params.id);
        
        this.setState({

            
            Pais_Nombre:res.data.Pais_Nombre,
            Pais_Poblacion:res.data.Pais_Poblacion,
            clima_pais:res.data.clima_pais,
            

            editing: true,
            _id: this.props.match.params.id 
        })
        
    }
  }


  getpais = async () =>{
        const per = await axios.get('http://localhost:9000/api/paises/');
        this.setState({pais: per.data});    
        
   }


    createpais = async a =>{

        a.preventDefault();

        const newDir = {

            Pais_Nombre:this.state.Pais_Nombre,
            Pais_Poblacion:this.state.Pais_Poblacion,
            clima_pais:this.state.clima_pais,

            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

         
          await axios.put('http://localhost:9000/api/paises/' + this.state._id, newDir);

          window.location.href = '/ListarPaises';  
          
          }

       
          else{
            await axios.post('http://localhost:9000/api/paises/', newDir);

          
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
              <h4 align="center">REGISTRO DE PAISES</h4>
              <h4 bgcolor="black">PAIS NOMBRE</h4>

                             
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="PAIS NOMBRE" 
                      name="Pais_Nombre"
                      onChange= {this.onInputChange}
                      value={this.state.Pais_Nombre}
                      required
                      />  
                    </div>
              
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="PAIS POBLACION" 
                      name="Pais_Poblacion"
                      onChange= {this.onInputChange}
                      value={this.state.Pais_Poblacion}
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Clima" 
                      name="clima_pais"
                      onChange= {this.onInputChange}
                      value={this.state.clima_pais}
                      required
                      />  
                    </div>
              
              <form onSubmit={this.createpais}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR PAIS
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


