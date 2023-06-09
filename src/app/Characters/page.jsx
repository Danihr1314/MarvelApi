import React from 'react';
import Link from 'next/link';

import styles from './Characters.module.css';

const fetchCharacters = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getCharacters({ params }) {
  const char = await fetchCharacters();
  const charArray = char.data.results;

  return (
    <div>
      <section className={styles.section}>
        {charArray.slice(0, 20).map((character) => {
          return (
            <article key={character.id}>
              <Link href="/Characters/[id]" as={`/Characters/${character.id}`}>
                <div className={styles.card}>
                  <div className={styles.cardOverlay}>
                    <h2 className={styles.name}>{character.name}</h2>
                  </div>
                  <img
                    className={styles.img}
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt="Character image"
                  />
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default getCharacters;
