import React from 'react';
import imagemCard from '../../img/img_artigo.jpg'
import '../card/card.css'

function Card(){
    return(
        <a href="#demo-modal">
            <article className="artigo">
            <img src={imagemCard}  alt="imagem congelada de uma gameplay de elden ring"/>
                <h3>Uma mamchete com um leve resumo sobre a materia</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sequi autem
                    architecto reiciendis adipisci cupiditate iure eum in laudantium ad nostrum maiores
                </p>
            </article>
        </a>
    );
}

export default Card;