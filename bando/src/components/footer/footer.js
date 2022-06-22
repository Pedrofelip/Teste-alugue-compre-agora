import React from 'react';
import logo from '../../img/logo_footer.png'
import '../footer/footer.css'

function Footer(){
    return(
        <footer>
        <div className="rodape posicionamento_itens_rodape">
            <div className="wrapper">
                <div className="itens_rodape">
                <img src={logo}  className="logo_rodape" alt="Logo do site escrita o nome do site cujo é Bando Games" />
                    <div className="linha-vertical"></div>
                    <nav>
                        <ul className="links_rodape">
                            <li><span><a href="./index.html">inicio</a></span></li>
                            <li><span><a href="#sc_noticias">noticias</a></span></li>
                            <li><span><a href="./pages/cadastro.html">cadastro</a></span></li>
                            <li><span><a href="./pages/login.html">login</a></span></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;