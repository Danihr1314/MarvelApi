import React from 'react';

import styles from './Comics.module.css'

const fetchComics = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getComics({ params }) {
  const comics = await fetchComics();
  const comicArray = comics.data.results


  return (
    <div>
      <h1>"Estamos en el Comics"</h1>
      <section className={styles.section}>
        {comicArray.slice(0, 5).map((comic) => {
          return (
            <article key={comic.id}>
              <div className={styles.card}>
                <h2>{comic.title}</h2>
                <img className={styles.img}
                  src={`${comic.thumbnail.path}.jpg`}
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

export default getComics;

