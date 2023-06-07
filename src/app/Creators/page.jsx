import React from 'react';

import styles from './Creators.module.css'

const fetchCreators = () => {
    return fetch(
        'https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
    ).then((res) => res.json())
}

async function getCreators({ params }) {
    const creators = await fetchCreators()
    const creatorArray = creators.data.results

    return (
        <div>
            <h1>"Estamos en los creadores"</h1>
            <section className={styles.section}>
                {creatorArray?.slice(0, 5).map((creator) => {
                    return (
                        <article key={creator.id}>
                            <div className={styles.card}>
                                <h2>{creator.fullName}</h2>
                                <img className={styles.img}
                                    src={`${creator.thumbnail.path}.jpg`}
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

export default getCreators;