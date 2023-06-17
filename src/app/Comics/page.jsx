import React from 'react';

import styles from './Comics.module.css';

const fetchComics = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getComics({ params }) {
  const comics = await fetchComics();
  const comicArray = comics.data.results;

  return (
    <div>
      <h1>"Estamos en el Comics"</h1>
      <section className={styles.section}>
        {comicArray.slice(0, 5).map((comic) => {
          return (
            <a href="" className={styles.card}>
              <img
                src={`${comic.thumbnail.path}.jpg`}
                className={styles.card_image}
                alt=""
              />
              <div className={styles.card_overlay}>
                <div className={styles.card_header}></div>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
}

export default getComics;

{
  /* <article key={comic.id}>
              <div className={styles.card}>
                <img
                  className={styles.img}
                  src={`${comic.thumbnail.path}.jpg`}
                  alt="Character image"
                />
                <h2 className={styles.title}>{comic.title}</h2>
              </div>
            </article> */
}
