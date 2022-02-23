



import React, { Component } from 'react'
import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"

export default class NoCisPersons extends Component {

    state= {
        total:"",
    }

    componentDidMount() {
        this.getPersonasCis();    
    }

    async getPersonasCis(){
        const res= await axios.get('http://localhost:9000/api/Cis/')  
        if(res.data.length===0){this.setState({total: res.data.length});  }   
    }
    
    render() {
        return (
            <div className="col-md-8 p-1">              
                <div className="card">
                    <h5>No se han encontrado personas Cis creadas</h5>    
                </div>
            </div>
        )
    }
}