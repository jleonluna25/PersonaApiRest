


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Departamento extends Component {
  state = {
    Departamento: [], 
    paisvec: [], 
    Dep_Nombre:"", 
    Dep_Pais:"", 
    editing: false
  }
    
  async componentDidMount(){
    this.getdepartamento();
    this.getpais();
      
    if(this.props.match.params.id){
      const res = await axios.get('http://localhost:9000/api/departamentos/' + this.props.match.params.id);  
      this.setState({
        Dep_Nombre:res.data.Dep_Nombre,
        Dep_Pais:res.data.Dep_Pais,      
        editing: true,
        _id: this.props.match.params.id 
      }) 
    }
  }
  
  getdepartamento = async () =>{
    const per = await axios.get('http://localhost:9000/api/departamentos/');
    this.setState({Departamento: per.data});        
  }

  getpais = async () =>{
    const per = await axios.get('http://localhost:9000/api/paises/');
    if(per.data.length===0){
      window.location.href = '/Nohaypais'; 
    }
    this.setState({paisvec: per.data,
      Dep_Pais :per.data[0].Pais_Nombre}); 
  }

  createdepartamento = async a =>{
    a.preventDefault();
    const newDir = {
      Dep_Nombre:this.state.Dep_Nombre,
      Dep_Pais:this.state.Dep_Pais,
      editing: true,
      _id: this.props.match.params.id 
    };

    if(this.state.editing){       
      await axios.put('http://localhost:9000/api/departamentos/' + this.state._id, newDir);
      window.location.href = '/ListarPaises';  
    }else{
      await axios.post('http://localhost:9000/api/departamentos/', newDir);
      window.location.href = '/ListarPaises';  
    }
  }

  onInputChange = e =>{      
    this.setState({ [e.target.name]: e.target.value  })
  }

  onInputChange2 = e =>{
    this.setState({  [e.target.name]: e.target.value  })
  }

  onChangeFechanac = e => {
    this.setState({e})
  } 

  render() {
    return (      
      <div className="col-md-25 offset-md-1">
        <div className="card card-body">
          <h4 align="center">REGISTRO DE DEPARTAMENTOS</h4>
          <h4 bgcolor="black">REGISTRAR DEPARTAMENTO</h4>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="DEPARTAMENTO O ESTADO" 
              name="Dep_Nombre"
              onChange= {this.onInputChange}
              value={this.state.Dep_Nombre}
            />  
          </div>     
          <div className="form-group">
            <form onSubmit={this.onInputChange}>
              <label>
                <h5 align="left">PAIS QUE PERTENECE</h5> 
                <select value={this.state.value} onChange={this.onInputChange} name="Dep_Pais" >
                  {            
                    this.state.paisvec.map(a => 
                      <option key={a._id} value={a.Pais_Nombre}>         
                        {a.Pais_Nombre}         
                      </option>         
                    )                                           
                  }                      
                </select>           
              </label>
            </form>
          </div>
            <form onSubmit={this.createdepartamento}>
              <button type="submit" className="btn btn-primary">
                GUARDAR DEPARTAMENTO
              </button>
            </form>
        </div>
      </div>     
    )
  }
}


