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
    <div>
      <section>
        <div className={styles.slider}>
          <ul>
            <li>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B531A83D55BFF108A7A0F0CB5DD873A93EAB2ACEA1A08A05A1DCA48E895C01EA/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Moon Knigth"
              />
            </li>
            <li>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3AF3175CB9CFF25C84C3404452D44D1248796FDD14993B324ADE0789ADB3BF5E/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Loki"
              />
            </li>
            <li>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65B8A33C5989488D9C8B766E1D1103204441EAD5791BA08836C848A7312CC6EC/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Daredevil"
              />
            </li>
            <li>
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DAA31D2EAD43853A24CCBD79A8C38E0EF299DEBEF59CC4100544C65AACC252D/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="Wandavision"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        {serieArray.slice(0, 10).map((serie) => {
          return (
            <article key={serie.id}>
              <div className={styles.card}>
                <h2>{serie.title}</h2>
                <img
                  className={styles.img}
                  src={`${serie.thumbnail.path}.jpg`}
                  alt="Serie image"
                />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default getSeries;
