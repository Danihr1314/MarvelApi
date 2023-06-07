import React from 'react';

import styles from './Characters.module.css';

const fetchCharacters = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function characters({ params }) {
  const char = await fetchCharacters();
  const charArray = char.data.results;

  return (
    <div>
      <h1>"Estamos en el characters"</h1>
      <section className={styles.section}>
        {charArray.slice(0, 5).map((character) => {
          return (
            <article key={character.id}>
              <div className={styles.card}>
                <h2>{character.name}</h2>
                <img className={styles.img}
                  src={`${character.thumbnail.path}.jpg`}
                  alt="Character image"
                />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default characters;
