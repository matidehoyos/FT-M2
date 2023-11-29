import React from "react";
import Botones from "./Botones";
import ReactDom from "react-dom";

const studentName = "Matias";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };



export default function Bienvenido() {
  // el código de tu componente acá
 return(
    <div>
      <h1>Hello World</h1>
      <h3>{studentName}</h3>
      <MostrarLista skills={techSkills} />
      <Botones mensajes={alerts}/>
    </div>
  )
};


function MostrarLista({skills}){
  const lista = skills.map((skill,index) => <li key={index}> {skill} </li> )
  return(
    <ul>
    {lista}
    </ul>
  )
}


// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
