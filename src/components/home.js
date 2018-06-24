import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Description from './description';
import Footer from './footer';
import front from './front/index';

import img from '../image/perfil2.jpg';


const home = () => {
    //<img src={`window.location.origin ${image/descarga.png}`} alt="Tec. Cuautla" />
  return (
<Router>
    <section className="section">
        <article className="description">
            <Route path="/front-end" component={front}/>
            <header>
                <h2 className="title-body"> Estudios: </h2>
            </header>
            <p className="text-section paragraph">
                Mis estudios superiores los lleve acabo en el Instituto Tecnologíco de Cuautla
                donde estudíe la carrera de Ingeniería en sistemas computacionales tomando como 
                especialidad de: servicios web con base de datos  
            </p>

        </article>
        <article className="img-section">
            <img src={ img} alt="Propiedad"/>
        
        </article>
        <Description></Description>
      <Footer></Footer>
    </section>
    </Router>
  )
}

export default home;