import React from "react";
import Intro from "../Intro/intro";
import "./header.css";
import CustomButton from "../Button/customButton";


const Home = () => {

    return(
    <header>
        <Intro titulo= " Cosme Fulanito" />        
        <h3> Header del componente llamado HOME </h3>
    

    </header>
);

}


export default Home;