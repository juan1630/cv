import React from 'react';
import Section from './section';

export default () => {
  return (
    <div className="body-front">
      <h1 className="title-front center">
          Bases de datos
      </h1>
      <section>
        <header>
          <h2 className="title-body">
              Manejadores de bases de datos que he usado
          </h2>
        </header>
        <Section></Section>
      </section>
    </div>
  )
}
