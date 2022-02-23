import React, { Component } from 'react';
import axios from 'axios'; //se importa la libreria que sirve de cliente http para usar ajax
import 'react-datepicker/dist/react-datepicker.css';

export default class Cis extends Component {
  state = {
    Cis: [], 
    NombrePersona:"", 
    GeneroPersona:"",
    EtniaPersona: "" ,
    NacimientoPersona: Date.now,
    IdPersona: {}, 
    editing: false
  }
    
  async componentDidMount(){//al parecer esta es alguna clase de manejo de eventos que responde a ¿ciclo de vida de un componente y su estado -mount en este caso-?
    this.getCis();
      
    if(this.props.match.params.id){//props representa un objeto con propiedades de la clase
      const res = await axios.get('http://localhost:9000/api/Cis/' + this.props.match.params.id);  
      this.setState({
        NombrePersona: res.data.NombrePersona, 
        GeneroPersona: res.data.GeneroPersona,
        EtniaPersona: res.data.EtniaPersona,
        NacimientoPersona: res.data.NacimientoPersona,
        IdPersona: this.props.match.params.id , 
        editing: true,

        //_id: this.props.match.params.id //aun no entiendo por que no se utilizas res 
      }) 
    }
  }
  
  getCis = async () =>{
    const person = await axios.get('http://localhost:9000/api/Cis/');
    this.setState({Cis: person.data});        
  }

  createCis = async a =>{
    a.preventDefault();
    const newPerson = {
      NombrePersona: this.state.NombrePersona, 
      GeneroPersona: this.state.GeneroPersona,
      EtniaPersona: this.state.EtniaPersona,
      NacimientoPersona: this.state.NacimientoPersona,
      IdPersona: this.props.match.params.id,
      editing: true,
    };

    if(this.state.editing){       
      await axios.put('http://localhost:9000/api/Cis/' + this.state.IdPersona, newPerson);
      window.location.href = '/ListarPersonasCis';  
    }else{
      await axios.post('http://localhost:9000/api/Cis/', newPerson);
      window.location.href = '/ListarPersonasCis';  
    }
  }

  onInputChange = e =>{      
    this.setState({ [e.target.name]: e.target.value  })
  }
/*
  onInputChange2 = e =>{
    this.setState({  [e.target.name]: e.target.value  })
  }

  onChangeFechanac = e => {
    this.setState({e})
  } 
*/
  render() {
    return (      
      <div className="col-md-25 offset-md-1">
        <div className="card card-body">
          <h4 align="center">CREACION PERSONA CIS</h4>
          <h4 bgcolor="black">Crear Persona Cis</h4>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Nombre de la persona" 
              name="NombrePersona"
              onChange= {this.onInputChange}
              value={this.state.NombrePersona}
            />  
          </div>     
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="G&eacute;nero de la persona" 
              name="GeneroPersona"
              onChange= {this.onInputChange}
              value={this.state.GeneroPersona}
            />  
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Etnia de la persona" 
              name="EtniaPersona"
              onChange= {this.onInputChange}
              value={this.state.EtniaPersona}
            />  
          </div>
          
          <form onSubmit={this.createCis}>
            <button type="submit" className="btn btn-primary">
              GUARDAR Cis
            </button>
          </form>
        </div>
      </div>     
    )
  }
}


