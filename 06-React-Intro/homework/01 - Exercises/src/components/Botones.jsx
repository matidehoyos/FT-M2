import React from "react";
import { alerts } from "./Bienvenido";


export default class Botones extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={() => alert(this.props.mensajes.m1)}>Módulo 1</button>
                <button onClick={() => alert(this.props.mensajes.m2)}>Módulo 2</button>
            </div>
        )
    }
} 