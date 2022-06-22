import Header from "../../components/header/header";

function Noticias(){
    return(
        <div>
            <Header/>

            <main>
                <div className="fundo_form_login">
                    <form className="form_login">
                        <div className="input_login">
                            <input id="input_um" className="inputs_form" type="email" placeholder="email"/>
                        </div>
                        <div className="input_login">
                            <input id="input_dois" className="inputs_form_senha" type="password" placeholder="password" />
                            <button type="button" onclick="mostrarOcultarSenha('olho_senha','input_dois')" className="olho_botao"><i id="olho_senha" class="fas fa-eye"></i></button>
                        </div>
                        <div className="posicionamento_redirecionamento">
                            <p className="redirecionamento ">Ainda não possui cadastro? <a href="./cadastro.html">cadastre-se</a></p>
                        </div>
                        <div className="posicionamento_btn">
                            <button type="button" className="btn">login</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Noticias