import React from 'react';
import logo from '../../img/BlaizeBaller.gif'
import '../header/header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className="cabecalho">
            <div className="wrapper flex">
                <img src={logo}  className="logo_cabecalho" alt="Logo do site escrita o nome do site cujo é Bando Games" />  
                <nav className="botoes_cabecalho">
                    
                    <Link to="/"  className="botao_cabecalho">inicio</Link>
                    <Link to="/noticias"  className="botao_cabecalho">noticias</Link>
                    <Link to="/login"  className="botao_cabecalho">login</Link>

                </nav>
            </div>
        </header>
    );
}
export default Header;