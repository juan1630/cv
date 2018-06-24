import React from 'react';
import Section from './section';

export default () => {
  return (
    <div className="body-front">
          <h1 className="title-front center">
              Back-end
          </h1>
          <section className="section-front">
                <header>
                    <h2 className="title-body" >
                      Tecnolgías y lenguajes que he usasdo
                    </h2>
                </header>
                <article>
                  <Section></Section>
                </article>
          </section>
    </div>
  )
}
