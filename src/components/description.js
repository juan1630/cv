import React from 'react';

const description = () => {
  return (
    <div className="description-mine">
        <header>
            <h3 className="title-body">
                Personal:
            </h3>
        </header>
        <section>
            <p className="text-section">
                Actualmete tengo 23 años de edad vivo en Cuautla Morelos.
                Soy desarrollador web fullstack, practicante de artes marciales

            </p>
        </section>
        <section>
            <h3 className="title-body">
                    Premios:
                </h3>
                <div className="define">
                    <dl>
                        <dt>
                            Hakathon coparmex 2016
                        </dt>
                        <dd>
                            Mi equipo y yo obtubimos el segundo lugar
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            Hakathon por el agua 2018
                        </dt>
                        <dd>
                            Segundo lugar en el estao de Morelos
                        </dd>
                    </dl>
                </div>
        </section>
    </div>
  )
}


export default description;