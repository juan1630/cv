import React from 'react';
import Section from './section';

const front = () => {
  return (
    <div className="body-front">
          <h1 className="title-front center">
              Front-end
          </h1>
          <section className="section-front">
                <header>
                    <h2 className="title-body" >
                      Tecnolgías que domino
                    </h2>
                </header>
                <article>
                  <Section></Section>
                </article>
          </section>
    </div>
  )
}

export default front;