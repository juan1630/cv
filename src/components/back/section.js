import React from 'react';
import node from '../../image/node.png';
import php from '../../image/php.png';
import laravel from '../../image/laravel.png';

export default () => {
  return (
    <div>
      <div className="node">
        <header>
            <h4>
               Node  
            </h4>
        </header>
        <p className="front-p">
                Javascript del lado del servidor con el cual he hecho proyectos de gran escala
            </p>
            <img src={node} alt="Node" />
      </div>
      <div>
          <header>
              <h4>
                PHP
              </h4>
          </header>
          <p className="front-p">
             Lenguaje de programación muy usado con tecnologías web
          </p>
          <img src={php} alt="Laravel" className="laravel"/>
      </div>
      <div>
          <header>
              <h4>
                Laravel
              </h4>
          </header>
          <p className="front-p">
              Este framework de PHP que es muy utilizado en el desarrollo del ecomerce
          </p>
          <img src={laravel} alt="Laravel" className="laravel"/>
      </div>
    </div>
  )
}
