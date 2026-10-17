import { useState } from 'react'
import './App.css'
import Boton from "./componentes/atomos/Boton.jsx";
import Icono from "./componentes/atomos/Icono.jsx";
import EtiquetaTecnologia from "./componentes/atomos/EtiquetaTecnologia.jsx";
import {perfil} from "./datos/informacionPerfil.js";
import AvatarPerfil from "./componentes/atomos/AvatarPerfil.jsx";

function App() {

  return (
    <>

      <h1> Maximiliano Rodriguez</h1>
        <Boton onClick={() => alert('¡hola!')}>Primario</Boton>
        <Boton variante="secundario">Secundario</Boton>
        <Boton variante="texto">jiji</Boton>
        <Icono nombre="perfil" tamano={30} />
        <Icono nombre="github" style={{ color: 'red' }} />
        {['Java', 'Spring Boot 3', 'MySQL'].map((tec) => (
            <EtiquetaTecnologia key={tec}>{tec}</EtiquetaTecnologia>
        ))}
        <AvatarPerfil src={perfil.avatar} iniciales={perfil.iniciales} />

    </>
  )
}

export default App
