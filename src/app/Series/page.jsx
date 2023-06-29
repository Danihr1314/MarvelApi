import React from 'react';

import styles from './Series.module.css';

const fetchSeries = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getSeries({ params }) {
  const series = await fetchSeries();
  const serieArray = series.data.results;

  return (
    <div className={styles.series_container}>
      <section>
        <div className={styles.slider}>
          <ul>
            <li>
              <h1>Moon knight</h1>
              <h2>
                Moon Knight follows Steven Grant (Oscar Isaac), a mild-mannered
                gift shop clerk suffering from mental illness. This prevents him
                from distinguishing the reality of his dreams, in addition to
                suffering blackouts and having memories of another life.
              </h2>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B531A83D55BFF108A7A0F0CB5DD873A93EAB2ACEA1A08A05A1DCA48E895C01EA/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Moon Knigth"
              />
            </li>
            <li>
              <h1>Loki</h1>
              <h2>
                Loki is caught by the mysterious Temporal Variation Authority,
                an agency that watches over the Sacred Time Line, where they
                offer him to become an agent to alleviate the effects of some of
                his actions.
              </h2>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3AF3175CB9CFF25C84C3404452D44D1248796FDD14993B324ADE0789ADB3BF5E/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Loki"
              />
            </li>
            <li>
              <h1>Daredevil</h1>
              <h2>
                Matt Murdock, blind since childhood, fights injustice in Hell's
                Kitchen, New York, by day as a lawyer and by night as the
                superhero Daredevil.
              </h2>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65B8A33C5989488D9C8B766E1D1103204441EAD5791BA08836C848A7312CC6EC/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Daredevil"
              />
            </li>
            <li>
              <h1>Wandavision</h1>
              <h2>
                Follow Wanda Maximoff and Vision are living a dream life in the
                small town of Westview, New Jersey, until their reality begins
                to move through different decades of comedy homages and TV
                tropes.
              </h2>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DAA31D2EAD43853A24CCBD79A8C38E0EF299DEBEF59CC4100544C65AACC252D/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Wandavision"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        {serieArray.slice(0, 18).map((serie) => {
          return (
            <article key={serie.id}>
              <div className={styles.card}>
                <img
                  className={styles.img}
                  src={`${serie.thumbnail.path}.jpg`}
                  alt="Serie image"
                />
                <div className={styles.capa}>
                  <h3>{serie.title}</h3>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default getSeries;
