


import React, { Component } from 'react'
import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"

export default class Nohaypais extends Component {

    state= {
        total:"",
    }

    componentDidMount() {
     
        this.getPais();    
       }

       async getPais(){
        const res= await axios.get('http://localhost:9000/api/paises/')  
        if(res.data.length===0){this.setState({total: res.data.length});  }   
        }

    
    
    render() {
       
        return (
            <div className="col-md-8 p-1">
                            
                        <div className="card">
                        <h5>No se pueden insertar departamentos, no hay paises aùn</h5>    
                        </div>
            </div>
            
                 
        )
    }
}