import React from 'react';
import './intro.css';
import dragon from './dragon.jpg';
import customButton from '../Button/customButton';



const Intro = ({ titulo }) => {
    return(
    <div className='contenedorImagen'>
    <img src={dragon} className="icon" alt="Foto perfil "/>
    <h1> {titulo} </h1>

    <customButton color="red" texto="Botón intro" ></customButton>
    <customButton color="blue" texto="Botón intro" ></customButton>


    </div>
)
}

export default Intro;