import React from 'react';

import styles from './page.module.css';

const fetchEvents = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getEvents({ params }) {
  const events = await fetchEvents();
  const eventArray = events.data?.results;

  return (
    <main>
      <div>
        <div className={styles.hero}>
          <img src="https://wallpaperaccess.com/full/2832527.jpg" alt="" />
        </div>
        <section className={styles.section}>
          {eventArray?.slice(0, 6).map((event) => {
            return (
              <article key={event.id}>
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img
                      src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                      alt="Serie image"
                    />
                  </div>
                  <div className={styles.text}>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default getEvents;
