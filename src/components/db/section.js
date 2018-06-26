import React from 'react';
import Mongo from '../../image/mongo.png';
import Mysql from '../../image/mysql.png';

export default () => {
  return (
    <div className="conte">
      <div className="mongo">
        <header>
            <h4>
               Mongo DB
            </h4>
            <p  className="front-p space">
                Base de datos no relacional y muy potente 
            </p>
            <img src={Mongo} alt="Mongo" className="img-mongo" />
        </header>
      </div>
      <div className="mysql">
        <header>
            <h4>
                 Mysql
            </h4>
            <p  className="front-p space">
               Base de datos relacional 
            </p>
            <img src={Mysql} alt="myql" className="mysql" />
        </header>
      </div>
    </div>
  )
}
