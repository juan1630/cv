import React from 'react';
import img from '../image/perfil2.jpg';


const home = () => {
    //<img src={`window.location.origin ${image/descarga.png}`} alt="Tec. Cuautla" />
  return (
   <section className="section">
       <article className="description">
           <header>
               <h2 className="title-body"> Estudios: </h2>
           </header>
           <p className="text-section">
               Mis estudios superiores los lleve acabo en el Instituto Tecnologíco de Cuautla
               donde estudíe la carrera de Ingeniería en sistemas computacionales tomando como 
               especialidad de: servicios web con base de datos  
           </p>

       </article>
       <article className="img-section">
           <img src={ img} alt="Propiedad"/>
       </article>
   </section>
  )
}

export default home;