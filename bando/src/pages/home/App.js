import './App.css';
import '../../assets/reset.css'

import Login from './pages/login/login';

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Card from '../../components/card/card'

import {Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>

      <main>
        <section>
                      <div className="card1">
                          <div className="wrapper alinhamento_banner">

                              <div className="txt_banner">
                                  <h1 className="titulo_banner">Titulo</h1>
                                  <h2 className="descricao_banner">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                      Hic atque voluptatem fugiat ullam ex nulla eius, eaque, expedita exercitationem
                                      eligendi modi? Reiciendis, dolor aliquid. In, laborum.</h2>
                                  <div className="btn_banner">
                                      <Link  className="btn_login" to="/login">login</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
        </section>
        <section className="secao_noticias" id="sc_noticias">
          <div className="wrapper">
            <h2 className="h2_noticias">noticias</h2>
            <div className='secao_artigos'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </section>
      </main>

      <Footer/>

    </div>


  );
}

export default App;
