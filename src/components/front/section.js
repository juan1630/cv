import React from 'react';
import imgHtml from '../../image/html.jpeg';
import sass from '../../image/sass.png';
import pug from '../../image/pug.png';
import Bootsrap from '../../image/bootstrap.png';
import reactor from '../../image/react.jpeg';

export default () => {
  return (
    <div className="teconologias">
        <div className="html">
            <h4>
                HTML5
            </h4>
            <p className="front-p">
                Dominio en gran medida de este estandar que va de la mano con el dominio de CSS

            </p>
            <img src={imgHtml} alt="Html" className="img-front"/>
        </div>
        <div>
            <h4>
                SASS
            </h4>
            <p className="front-p">
                Domino este preprocesador de CSS 
            </p>
            <img src={sass} alt="SASS" />
        </div>
        <div>
            <h4>
                PUG
            </h4>
            <p className="front-p">
                Este motor de plantillas el cual ha sido de gran ayuda en muchos proyectos
            </p>
            <img src={pug} alt="Motor de plantillas"/>
        </div>
        <div>
            <h4>
                Bootsrap
            </h4>
            <p className="front-p">
                El framework que más he usado
            </p>
            <img src={Bootsrap} alt="bootsrap" />
        </div>
        <div>
            <h4>
                React js 
            </h4>
            <p className="front-p">
                framework visual el cual manejo mucho
            </p>
            <img src={reactor} alt="React js" />
        </div>
    </div>
  )
}
