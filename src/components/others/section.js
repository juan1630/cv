import React from 'react';
import Ubuntu from '../../image/ubuntu.png';
export default () => {
  return (
    <div className="cont">
       <div className="ubuntu">
        <header>
            <h4>
               UBUNTU  
            </h4>
        </header>
        <p className="front-p">
               Un sistema operativo basado en Debian y con un gran entorno para el manejo de servidores web
            </p>
            <img src={Ubuntu} alt="ubuntu" className="img-ubuntu" />
      </div>  
    </div>
  )
}
