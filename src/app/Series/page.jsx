import React from 'react';

import styles from './Series.module.css'

const fetchSeries = () => {
    return fetch(
        'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
    ).then((res) => res.json())
}

async function getSeries({ params }) {
    const series = await fetchSeries()
    const serieArray = series.data.results

    return (
        <div>
            <h1>"Estamos en las series"</h1>
            <section className={styles.section}>
                {serieArray.slice(0, 5).map((serie) => {
                    return (
                        <article key={serie.id}>
                            <div className={styles.card}>
                                <h2>{serie.title}</h2>
                                <img className={styles.img}
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
};

export default getSeries;